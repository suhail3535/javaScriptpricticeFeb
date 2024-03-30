import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiImageAddFill } from "react-icons/ri";
import { useFireBase } from '../../firebase/fireBaseContext';
import { v4 } from 'uuid';
const GroupModal = ({ users, logUserData, handleClose, handleShow, show }) => {


    const [selectedFriends, setSelectedFriends] = useState([]);
    const [profileFile, setProfileFile] = useState(false)
    const [groupName, setGroupName] = useState("")
    const { createGroupRoom } = useFireBase()

    const handleCheckboxChange = (uid) => {
        if (selectedFriends.includes(uid)) {
            setSelectedFriends(selectedFriends.filter((friendId) => friendId !== uid));
        } else {
            setSelectedFriends([...selectedFriends, uid]);
        }
    };

    const fileInputRef = useRef(null)

    const handleFileIconClick = () => {
        fileInputRef.current.click()
    }

    const profileSelectionHandler = (e) => {
        setProfileFile(fileInputRef.current.files[0])
    }

    const createGroupHandler = () => {
        if (groupName.length == 0 || selectedFriends.length == 0 || !profileFile ) {
            
            return
        }
        const fileName = profileFile.name + v4()
        createGroupRoom(profileFile, fileName, groupName, [...selectedFriends,logUserData?.uid],logUserData?.uid)
        setProfileFile(false)
        setGroupName("")
        setSelectedFriends([])
        handleClose()
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header style={{ backgroundColor: "#474b50" }} closeButton>
                    <Modal.Title>Create Group</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#292D32" }}>

                    <div
                        className='group-Name-input-div'
                    >
                        <input className='group-Name-input'  value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder='Enter Group Name' type="text" />
                    </div>

                    <div className='add-photo-icon' >
                        <span>Add Group Photo</span>
                        <input type="file" onChange={profileSelectionHandler} ref={fileInputRef} style={{ display: 'none' }} />
                        {

                            !profileFile ? <RiImageAddFill onClick={handleFileIconClick} style={{ fontSize: "30px", cursor: "pointer", margin: "10px" }} />
                                :
                                <div className='profile-pic modal-pics' >
                                    <img style={{ height: "50px", objectFit: "cover", cursor: "pointer" }} onClick={handleFileIconClick} src={URL.createObjectURL(profileFile)} alt="" />
                                </div>

                        }
                    </div>

                    <h5 style={{ marginBottom: "10px", marginTop: "10px" }} >Add Memeber</h5>
                    <div className="friendsList model-friend-list">
                        {users?.map((friend) => {
                            if (friend.uid !== logUserData?.uid) {
                                return (
                                    <div
                                        key={friend.uid}
                                        className={`friend ${selectedFriends.includes(friend.uid) ? 'selected' : ''}`}
                                    >
                                        <div
                                            className="inner-friend inner-modal-section"
                                        >
                                            <input
                                                className='checkBox'
                                                type="checkbox"
                                                id={`checkbox-${friend.uid}`}
                                                checked={selectedFriends.includes(friend.uid)}
                                                onChange={() => handleCheckboxChange(friend.uid)}
                                            />
                                            <div className="profile-pic modal-pics">
                                                <img src={friend.photoURL} alt="" />
                                            </div>
                                            <p className="profile-name">{friend.displayName}</p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>

                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#474b50" }} >
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createGroupHandler} >CreateGroup</Button>
                </Modal.Footer>
            </Modal>
        </>



    )
}

export default GroupModal