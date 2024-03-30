import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { fireStore, useFireBase } from '../../firebase/fireBaseContext';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsThreeDotsVertical } from "react-icons/bs";



const GroupInfo = ({ show, handleClose, groupData, logUserData, setShowWelcom, showDpHandler }) => {
  const [membersData, setMembersData] = useState([])
  const [adminsData, setAdminsData] = useState([])
  const [showAddMember, setShowAddMember] = useState(false)
  const [users, setUsers] = useState([])
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [showRemoveMember, setShowRemoveMember] = useState(false)
  const [addAdmin, setAddAdmin] = useState(false)
  const [realTimeGroupData, setRealTimeGroupData] = useState({})
  const { getadminsData, addNewAdmin, removeGroupMember, addNewMember, leftGroup, deleteGroup } = useFireBase();

  const handleCheckboxChange = (uid) => {
    if (selectedFriends.includes(uid)) {
      setSelectedFriends(selectedFriends.filter((friendId) => friendId !== uid));
    } else {
      setSelectedFriends([...selectedFriends, uid]);
    }
  };


  const trackOnline = () => {
    const myCol = collection(fireStore, "users")
    onSnapshot(myCol, (docsSnpashot) => {
      const data = docsSnpashot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })

      setUsers(data)
    })
  }



  useEffect(() => {
    trackOnline()
    let unSubscribe = () => { };

    if (Object?.keys(groupData).length) {
      const myCol = doc(fireStore, "groupChat", groupData.roomId)
      unSubscribe = onSnapshot(myCol, (docsSnpashot) => {
        const data = docsSnpashot.data()
        setRealTimeGroupData(data)
        setMembersData([]);
        data?.users?.forEach(id => {
          const adminsDataHandler = async () => {
            const data = await getadminsData(id)
            setMembersData(prev => [...prev, data]);
          }
          adminsDataHandler()
        })

        setAdminsData([]);
        data?.admins?.forEach(id => {

          const adminsDataHandler = async () => {
            const data = await getadminsData(id)
            setAdminsData(prev => [...prev, data]);
          }
          adminsDataHandler()
        })
      })
    }
    return () => {
      unSubscribe()
    }
  }, [groupData])

  const hideHandler = () => {
    setShowAddMember(false)
    setSelectedFriends([])
    setShowRemoveMember(false)
    setAddAdmin(false)
  }

  const addNewAdminHandler = () => {
    if (selectedFriends.length == 0) return
    addNewAdmin(groupData?.roomId, selectedFriends)
    setAdminsData([]);
    setMembersData([]);
    hideHandler()

  }

  const removeGroupMemberHandler = () => {
    if (selectedFriends.length == 0) return
    removeGroupMember(groupData?.roomId, selectedFriends)
    hideHandler()
    setAdminsData([]);
    setMembersData([]);

  }

  const addGroupMemberHandler = () => {
    if (selectedFriends.length == 0) return
    addNewMember(groupData?.roomId, selectedFriends)
    hideHandler()
    setAdminsData([]);
    setMembersData([]);
  }

  const leftGrouHandler = () => {
    leftGroup(groupData?.roomId, logUserData?.uid)
    setShowWelcom(true)
    hideHandler()
    handleClose(false)
  }
  const deleteGroupHandler = () => {
    deleteGroup(realTimeGroupData.roomId)
    hideHandler()
    handleClose(false)
    setShowWelcom(true)
  }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header style={{ backgroundColor: "#474b50" }} closeButton onHide={hideHandler}  >
        {
          realTimeGroupData?.admins?.includes(logUserData?.uid) ?
            <Dropdown style={{ position: "absolute", right: '40px' }} >
              <Dropdown.Toggle id="dropdown-basic">
                <BsThreeDotsVertical style={{ color: "red" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "#292D32" }} >
                <Dropdown.Item onClick={leftGrouHandler} >Leave Group</Dropdown.Item>
                <Dropdown.Item onClick={deleteGroupHandler} className='Delete-Group' >Delete Group</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> : null
        }

        <Modal.Title style={{
          display: 'flex',
          gap: "10px",
          alignItems: "center",
        }} >
          <div
            onClick={() => showDpHandler(groupData.groupImage, groupData.groupName)}
            style={{
              width: "50px",
              height: "50px"
            }} className="profile-pic">
            <img style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "50%"
            }} src={groupData.groupImage}
              alt="" />
          </div>
          <p style={{ margin: '0' }} >
            {groupData.groupName}
            <span style={{ fontSize: "12px", display: "block", color: "gray" }} >{realTimeGroupData?.users?.length} Members </span>
          </p>
        </Modal.Title>
      </Modal.Header>
      {
        showAddMember ?
          <Modal.Body style={{ backgroundColor: "#292D32" }} >
            <p style={{
              marginBottom: "10px",
              fontSize: "20px",
              fontWeight: "600"
            }}  >All Users</p>
            {
              users?.map((user) => {
                if (user.uid !== logUserData.uid)
                  if (!realTimeGroupData?.users?.includes(user.uid))
                    return (
                      <div className='friend' key={user.uid} style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        marginBottom: "10px"
                      }}  >

                        <input className='checkBox'
                          id={`checkbox-${user.uid}`}
                          checked={selectedFriends.includes(user.uid)}
                          onChange={() => handleCheckboxChange(user.uid)}
                          type="checkbox" style={{ cursor: "pointer" }} />
                        <div
                          onClick={() => showDpHandler(user.photoURL, user.displayName)}
                          style={{
                            width: "50px",
                            height: "50px"
                          }} className="profile-pic">
                          <img
                            src={user.photoURL}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "50%"
                            }} alt="" />
                        </div>
                        <p style={{ margin: '0' }} > {user.displayName}

                        </p>
                      </div>
                    )
              })
            }

          </Modal.Body> :

          showRemoveMember ?


            <Modal.Body style={{ backgroundColor: "#292D32" }} >
              <p style={{
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "600"
              }}  >Group Members</p>
              {
                membersData?.map((user) => {

                  if (showRemoveMember && user.uid !== logUserData.uid)
                    return (
                      <div className='friend' key={user.uid} style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        marginBottom: "10px"
                      }}  >
                        <input className='checkBox'
                          id={`checkbox-${user.uid}`}
                          checked={selectedFriends.includes(user.uid)}
                          onChange={() => handleCheckboxChange(user.uid)}
                          type="checkbox" style={{ cursor: "pointer" }} />
                        <div style={{
                          width: "50px",
                          height: "50px"
                        }} className="profile-pic">
                          <img
                            src={user.photoURL}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "50%"
                            }} alt="" />
                        </div>
                        <p style={{ margin: '0' }} > {user.uid == logUserData?.uid ? "You" : user.displayName}
                          {realTimeGroupData.admins.includes(user.uid) ? <span style={{ fontSize: "12px", color: "gray", marginLeft: "10px" }} >admin</span> : ""}
                        </p>
                      </div>
                    )
                })
              }
            </Modal.Body>
            :
            addAdmin ? <Modal.Body style={{ backgroundColor: "#292D32" }} >
              <p style={{
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "600"
              }}  >Add Admin</p>
              {
                membersData?.map((user) => {
                  if (user.uid !== logUserData.uid)
                    if (!realTimeGroupData.admins.includes(user.uid))
                      return (
                        <div className='friend' key={user.uid} style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                          marginBottom: "10px"
                        }}  >

                          <input className='checkBox'

                            id={`checkbox-${user.uid}`}
                            checked={selectedFriends.includes(user.uid)}
                            onChange={() => handleCheckboxChange(user.uid)}
                            type="checkbox" style={{ cursor: "pointer" }} />
                          <div style={{
                            width: "50px",
                            height: "50px"
                          }} className="profile-pic">
                            <img
                              src={user.photoURL}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "50%"
                              }} alt="" />
                          </div>
                          <p style={{ margin: '0' }} > {user.displayName}
                          </p>
                        </div>
                      )
                })
              }
            </Modal.Body> :
              <Modal.Body style={{ backgroundColor: "#292D32" }} >
                <div className="group-admin">
                  <p style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    fontWeight: "600"
                  }}  >Admin</p>
                  {
                    adminsData?.map((admin) => {
                      return (
                        <div className='friend' key={admin.uid} style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                          marginBottom: "10px"
                        }}  >
                          <div
                            onClick={() => showDpHandler(admin.photoURL, admin.displayName)}
                            style={{
                              width: "50px",
                              height: "50px"
                            }} className="profile-pic">
                            <img style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "50%"
                            }} src={admin.photoURL} alt="" />
                          </div>
                          <p> {admin.uid == logUserData.uid ? "You" : admin.displayName}
                          </p>
                        </div>
                      )
                    })
                  }

                  <p style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    fontWeight: "600"
                  }}  >Members</p>
                  {
                    membersData?.map((member) => {

                      return (
                        <div
                          onClick={() => showDpHandler(member.photoURL, member.displayName)}
                          className='friend' key={member.uid} style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                            marginBottom: "10px"
                          }}  >
                          <div style={{
                            width: "50px",
                            height: "50px"
                          }} className="profile-pic">
                            <img style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "50%"
                            }} src={member.photoURL} alt="" />
                          </div>
                          <p> {member.uid == logUserData?.uid ? "You" : member.displayName}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
              </Modal.Body>
      }
      <Modal.Footer style={{ backgroundColor: "#474b50" }} >

        {
          addAdmin ? <Button onClick={addNewAdminHandler} > Add to Admin </Button> :

            <>
              {
                groupData.admins?.includes(logUserData?.uid) ? <>

                  {
                    showRemoveMember ? null : showAddMember ? <Button onClick={addGroupMemberHandler} >Add</Button> : <> <Button variant="primary" onClick={() => setShowAddMember(true)} >{
                      showAddMember ? "Add Members" : "Add more member"
                    }</Button>
                      {
                        showAddMember ? null : <Button onClick={() => { setAddAdmin(true) }} > Add Admin </Button>
                      }

                    </>
                  }
                  {
                    showAddMember ? null : showRemoveMember ? <Button onClick={removeGroupMemberHandler} variant="danger">Remove </Button> : <Button onClick={() => setShowRemoveMember(true)} variant="danger">Remove member</Button>
                  }
                </>
                  : <Button variant='danger' onClick={leftGrouHandler}  >Left Group</Button>
              }
            </>
        }
      </Modal.Footer>
    </Modal>
  )
}

export default GroupInfo