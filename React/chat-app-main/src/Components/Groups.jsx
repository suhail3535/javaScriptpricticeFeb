import React, { useEffect, useState } from 'react'
import { fireStore } from '../../firebase/fireBaseContext'
import { collection, onSnapshot } from 'firebase/firestore'
const Groups = ({ showGroupChatHandler, setGroupRoomId, setGroupData, logUserData,setRoomId,showDpHandler }) => {

    const [groups, setGroups] = useState([])

    const trackOnline = () => {
        const myCol = collection(fireStore, "groupChat")
        onSnapshot(myCol, (docsSnpashot) => {
            const data = docsSnpashot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })
            setGroups(data)
        })
    }


    const groupHandler = (id, group) => {
        showGroupChatHandler()
        setGroupData(group)
        setGroupRoomId(id)
        setRoomId("")
        
    }

    useEffect(() => {
        trackOnline()
    }, [])

    // console.log(groups)
    // console.log(logUserData.uid)



    return (
        <div className='groups-container' >
            <div className="friendsList">
                <h4 className='margin-left' style={{ paddingLeft: "20px" }} > Groups</h4>
                {groups?.map((group) => {
                    if (group?.users?.includes(logUserData?.uid)) {
                        return (
                            <div key={group.groupImage} onClick={() => groupHandler(group.roomId, group)} className='friend' >
                                <div className='inner-friend' >
                                    <div onClick={() => showDpHandler(group.groupImage,group.groupName)}  className="profile-pic">
                                        <img src={group.groupImage} alt="" />
                                    </div>
                                    <p className='profile-name'> {group.groupName} </p>
                                </div>
                            </div>
                        )
                    }
                })
                }
            </div>
        </div>
    )
}

export default Groups