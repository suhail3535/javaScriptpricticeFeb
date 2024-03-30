import React, { useEffect, useRef, useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useFireBase } from '../../firebase/fireBaseContext';
import { FaAngleUp } from "react-icons/fa6";
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { fireStore } from '../../firebase/fireBaseContext';
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { IoIosAttach } from "react-icons/io";
import { v4 } from 'uuid';
import { MdGroups } from "react-icons/md";
import GroupModal from './GroupModal';
import Groups from './Groups';
import GroupChat from './GroupChat';
import GroupInfo from './GroupInfo';
import ShowDp from './ShowDp';
let cursorRef = null

const Home = () => {
    const [users, setUsers] = useState([])
    const [logUserData, setLogUserData] = useState({})
    const [input, setInput] = useState("")
    const [chatData, setChatData] = useState([])
    const [roomId, setRoomId] = useState("")
    const [chatUser, setChatUser] = useState({})
    const [dropDownId, setDropDownId] = useState("")
    const [editMsg, setEditMsg] = useState({})
    const [showEmojiContainer, setEmojiContainer] = useState(false)
    const [isTabVisible, setIsTabVisible] = useState(true);
    const [showGroupChat, setShowGroupChat] = useState(false)
    const [groupRoomId, setGroupRoomId] = useState("")
    const [showWelcom, setShowWelcom] = useState(true)
    const [groupData, setGroupData] = useState({})
    const [showGroupDetail, setShowGroupDetail] = useState(false)
    const [show, setShow] = useState(false);
    const [showDp, setShowDp] = useState(false);
    const [dpUrl, setDpUrl] = useState("")
    const [chatUsername, setChatUserName] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        const Data = JSON.parse(localStorage.getItem("chatUser"))
        setLogUserData(Data)
        getuserData()
    }, [])
    const getuserData = async () => {
        const data = await getAllUser()
        setUsers(data)
    }
    const { googleSignOut, getAllUser, checkRoom, sendMsg, deleteMsg, upDateMsg, tabShowOnline, uploadFile, closeTab, addGroupChat, updateGroupMsg, uploadGroupFile, } = useFireBase()
    const logoutHandler = () => {
        googleSignOut(navigate, logUserData?.id)
    }
    const createRoom = async (logUserId, friendId, name, dpUrl, isActive, docId) => {
        const data = await checkRoom(logUserId, friendId)
        setChatData(data.mes)
        setRoomId(data.fetchId)
        setChatUser({
            name: name,
            dpUrl: dpUrl,
            isActive: isActive,
            docId: docId,
        })
        setShowWelcom(false)
        setShowGroupChat(false)
        setGroupRoomId("")
    }
    const senMsgHandler = (e) => {

        e.preventDefault()

        if (input.trim() == "") {
            return
        }
        if (showGroupChat) {

            if (Object.entries(editMsg).length == 0) {
                const msg = {

                    senderId: logUserData?.uid,
                    message: input,
                    timeStamp: new Date(),
                    msgId: new Date().getTime(),
                    img: logUserData?.photoURL

                }
                addGroupChat(groupRoomId, msg)
                setInput("")
            }
            else {
                const editStamp = new Date()
                updateGroupMsg(groupRoomId, editMsg.msgId, input, editStamp)
                setInput("")
                setEditMsg({})
                setEmojiContainer(false)
            }

        }


        else {
            if (Object.entries(editMsg).length == 0) {
                const msg = {
                    senderId: logUserData?.uid,
                    message: input,
                    timeStamp: new Date(),
                    msgId: new Date().getTime(),
                    img: logUserData?.photoURL
                }
                sendMsg(roomId, msg)
                setChatData((prev) => [...prev, msg])
                setInput("")
                setEmojiContainer(false)
            }
            else {
                const editStamp = new Date()
                upDateMsg(editStamp, input, roomId, editMsg.msgId)
                setInput("")
                setEditMsg({})
                setEmojiContainer(false)
            }

        }


    }

    const trackChat = () => {
        if (roomId) {
            const docRef = doc(fireStore, "chats", roomId)
            onSnapshot(docRef, (docSnapshot) => {
                setChatData(docSnapshot.data().mes)
            }, (err) => {
                console.log(err)
            })
        }
    }


    const trackOnline = () => {
        const myCol = collection(fireStore, "users")
        onSnapshot(myCol, (docsSnpashot) => {
            const data = docsSnpashot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id }
            })

            setUsers(data)
        })
    }

    const headerOnline = () => {

        if (chatUser.docId) {
            const docRef = doc(fireStore, "users", chatUser.docId)
            onSnapshot(docRef, (docSnapshot) => {

                const data = docSnapshot.data()
                const { isActive } = data
                setChatUser((prev) => ({ ...prev, isActive: isActive }))

            },
                (err) => {
                    console.log(err)
                })
        }
    }
    useEffect(() => {
        trackChat()
        trackOnline()
        headerOnline()
    }, [roomId, chatUser.docId])



    const dropDownHandler = (id) => {
        setDropDownId(id)
    }
    const dropUpHandler = () => {
        setDropDownId(null)
    }

    const deleteMsgHandler = (msgId, roomId, url) => {

        deleteMsg(msgId, roomId, url)
        setDropDownId(null)

    }

    const updateMsgHandler = (msg) => {
        setEditMsg(msg)
        setInput(msg.message)
        setDropDownId("")
    }

    const showEmojiContainerHandler = () => {
        showEmojiContainer ? setEmojiContainer(false) : setEmojiContainer(true)
    }

    const addEmoji = (e) => {
        const sym = e.unified.split("_")
        const codeArray = sym.map((e) => parseInt(e, 16));
        let emoji = String.fromCodePoint(...codeArray)
        handleEmojiClick(emoji)
        // console.log(inputRef.current.selectionStart)
    }
    const inputRef = useRef(null)
    const handleEmojiClick = (e) => {
        let emoji = e;
        const cursorPosition = inputRef.current.selectionStart;

        if (cursorPosition !== 0) {
            cursorRef = cursorPosition
        }
        if (cursorRef !== null) {
            const newValue = input.slice(0, cursorRef) + emoji + input.slice(cursorRef);
            setInput(newValue);
            inputRef.current.selectionStart = cursorRef + emoji?.length;
            inputRef.current.selectionEnd = cursorRef + emoji?.length;

        } else {
            const newValue = input.slice(0, cursorPosition) + emoji + input.slice(cursorPosition);
            setInput(newValue);
            inputRef.current.selectionStart = cursorPosition + emoji?.length;
            inputRef.current.selectionEnd = cursorPosition + emoji?.length;
        }
        cursorRef = inputRef.current.selectionStart
    };




    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsTabVisible(!document.hidden);
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {

            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        if (logUserData.id) {
            tabShowOnline(isTabVisible, logUserData?.id)
        }
    }, [isTabVisible, logUserData])


    useEffect(() => {
        const handleBeforeUnload = (event) => {
            closeTab(logUserData?.id)
            const confirmationMessage = 'Are you sure you want to leave?';
            event.returnValue = confirmationMessage;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [])




    const fileInputRef = useRef(null)

    const uploadFileHandler = () => {


        if (showGroupChat) {

            const selectedFile = fileInputRef.current.files[0];
            const fileName = selectedFile.name + v4()
            const msg = {
                senderId: logUserData?.uid,
                timeStamp: new Date(),
                msgId: new Date().getTime(),
                msgType: selectedFile.type,
                img: logUserData?.photoURL
            }
            uploadGroupFile(selectedFile, fileName, msg, groupRoomId)
        }


        else {
            const selectedFile = fileInputRef.current.files[0];
            console.log(selectedFile)
            const fileName = selectedFile.name + v4()
            const msg = {
                senderId: logUserData?.uid,
                timeStamp: new Date(),
                msgId: new Date().getTime(),
                msgType: selectedFile.type,
                img: logUserData?.photoURL
            }
            uploadFile(selectedFile, fileName, msg, roomId)
        }

    }
    const handleFileIconClick = () => {
        fileInputRef.current.click()
    }
    const downLoadImage = async (url, fileType) => {
        try {
            console.log(fileType)
            const res = await fetch(url)
            const blob = await res.blob()
            const link = document.createElement("a")
            link.href = URL.createObjectURL(blob)
            link.download = `${v4()}.${fileType}`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } catch (error) {
            console.log(error)
        }
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const showGroupChatHandler = () => {
        setShowGroupChat(true)
        setShowWelcom(false)
    }
    const trackGroupChat = () => {
        if (groupRoomId) {
            const docRef = doc(fireStore, "groupChat", groupRoomId)
            onSnapshot(docRef, (docSnapshot) => {
                setChatData(docSnapshot.data().mes)
            }, (err) => {
                console.log(err)
            })
        }
    }
    useEffect(() => {
        trackGroupChat()
    }, [groupRoomId])

    const groupDetailhandlerShow = () => {
        if (!showGroupChat) return
        setShowGroupDetail(true)
    }
    const groupDetailhandlerClose = () => {
        setShowGroupDetail(false)
    }

    const showDpHandlerClose = () => {
        setShowDp(false)
    }
    const showDpHandler = (src, name) => {
        setShowDp(true)
        setDpUrl(src)
        setChatUserName(name)
    }
    return (
        <div className='home-container' >
            <GroupModal show={show} handleClose={handleClose} users={users} logUserData={logUserData} />
            <GroupInfo show={showGroupDetail} handleClose={groupDetailhandlerClose} groupData={groupData} logUserData={logUserData} setShowWelcom={setShowWelcom} showDpHandler ={showDpHandler} />
            <ShowDp show={showDp} handleClose={showDpHandlerClose} src={dpUrl} user={chatUsername} />
            <div className="friends">
                <div className="friendsHeader">
                    <div className="friendsHeader-inner" >

                        <div onClick={() => showDpHandler(logUserData?.photoURL, logUserData?.displayName)} className="profile-pic">
                            <img src={logUserData?.photoURL} alt="" />
                        </div>
                        <p className='profile-name'>{logUserData?.displayName}  <span className='green-active' > online</span> </p>

                    </div>

                    <div className='group-icon' onClick={() => handleShow()}  > <MdGroups style={{ fontSize: "32px" }} /> </div>
                </div>
                <div className="friendsList">
                    {
                        users?.map((friend) => {


                            if (friend.uid !== logUserData?.uid) {
                                return (
                                    <div key={friend.uid} className='friend' >
                                        <div className='inner-friend' >
                                            <div onClick={() => showDpHandler(friend.photoURL, friend.displayName)} className="profile-pic">
                                                <img src={friend.photoURL} alt="" />
                                            </div>
                                            <p className='profile-name' onClick={() => createRoom(logUserData?.uid, friend.uid, friend.displayName, friend.photoURL, friend.isActive, friend.id)} key={friend.uid} >{friend.displayName}</p>
                                        </div>
                                        {
                                            friend.isActive ? <span className='online-tag' >online</span> : null
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                    <Groups showGroupChatHandler={showGroupChatHandler} setGroupRoomId={setGroupRoomId} setGroupData={setGroupData} logUserData={logUserData} setRoomId={setRoomId} showDpHandler={showDpHandler} />
                </div>
            </div>
            {
                showWelcom ?
                    <div className='welcome-chat' >
                        <h1>Welcome to My Chat App</h1>
                    </div>
                    : (<div className='chats' >

                        <div className="chatsHeader">
                            <div className='friend' >
                                <div onClick={() => showDpHandler(showGroupChat ? groupData.groupImage : chatUser?.dpUrl, showGroupChat ? groupData.groupName : chatUser?.name)} className="profile-pic">
                                    <img style={{ objectFit: "cover" }} src={showGroupChat ? groupData.groupImage : chatUser?.dpUrl} alt="" />
                                </div>
                                <p onClick={() => groupDetailhandlerShow()} className='profile-name'>{showGroupChat ? groupData.groupName : chatUser?.name}
                                    {showGroupChat ? <span >
                                        click Here for Group Info
                                    </span> : null}
                                </p>
                                {
                                    showGroupChat ? null :
                                        chatUser?.isActive ? <span >online</span> : null
                                }
                            </div>
                            <button className='logout' onClick={logoutHandler}  >logOut</button>

                        </div>
                        {
                            showGroupChat ? <GroupChat logUserData={logUserData} chatData={chatData} dropDownHandler={dropDownHandler} showEmojiContainer={showEmojiContainer} addEmoji={addEmoji} setDropDownId={setDropDownId} dropDownId={dropDownId} groupRoomId={groupRoomId} updateMsgHandler={updateMsgHandler} dropUpHandler={dropUpHandler} downLoadImage={downLoadImage} /> : <div className="chatsList">
                                <div className="chatListInner">
                                    {
                                        chatData?.map((msg, i) => {
                                            let amPmTime = ""
                                            if (msg?.editStamp) {
                                                const timestamp = new Date(msg.editStamp.seconds * 1000).getTime();


                                                const Time = new Date(timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                                amPmTime = Time
                                            }
                                            else {
                                                const timestamp = new Date(msg.timeStamp.seconds * 1000).getTime();
                                                const Time = new Date(timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                                                amPmTime = Time
                                            }
                                            return msg.senderId !== logUserData?.uid ?
                                                <div key={i} className="recieveMsg">

                                                    <div className="profile-pic">
                                                        <img src={msg.img} alt="" />
                                                    </div>
                                                    {
                                                        msg.timeStamp.seconds == dropDownId ? <div className="download-img">
                                                            <div>
                                                                <p onClick={() => downLoadImage(msg.url, msg.msgType.split("/")[1])} > Downlaod  {msg.msgType.split("/")[0]}   </p>
                                                            </div>
                                                            <div onClick={dropUpHandler} className='angle-up'  >
                                                                <   FaAngleUp />
                                                            </div>
                                                        </div> :
                                                            <div className='msgParenttt' >
                                                                {
                                                                    msg?.msgType?.split("/")[0] == "image" ?
                                                                        <span className='msg-image' >
                                                                            <img src={msg.url} alt="" />
                                                                            <span className='msg-time' > {amPmTime}</span>
                                                                            <span className='img-angle' onClick={() => dropDownHandler(msg.timeStamp.seconds)}  > <FaAngleDown /> </span>
                                                                        </span>

                                                                        :
                                                                        msg?.msgType?.split("/")[0] == "video" ?

                                                                            <span className='msg-image' >

                                                                                <video controls src={msg.url}></video>
                                                                                <span className='msg-time' > {amPmTime}</span>
                                                                            </span>
                                                                            :
                                                                            msg?.msgType?.split("/")[0] == "text" || msg?.msgType?.split("/")[0] == "application" ? <p className='file-msg'  >

                                                                                <span style={{ fontSize: "14px" }} >File</span>: {msg.fileName}

                                                                                <span className='msg-time' > {amPmTime}</span>
                                                                                <span className='angle-down' onClick={() => dropDownHandler(msg.timeStamp.seconds)}  > <FaAngleDown /> </span>
                                                                            </p> :
                                                                                <p>{msg.message}
                                                                                    <span className='msg-time' > {amPmTime}</span>
                                                                                </p>
                                                                }

                                                                {
                                                                    msg.editStamp ? <div className="edited">Edited</div> : null
                                                                }
                                                            </div>
                                                    }
                                                </div>
                                                :
                                                <div key={i} className="sendMsg">
                                                    {
                                                        msg.timeStamp.seconds == dropDownId ? <div className="msg-edit">
                                                            <div>
                                                                {
                                                                    msg?.msgType?.split("/")[0] == "image" || msg?.msgType?.split("/")[0] == "video" || msg?.msgType?.split("/")[0] == "text" || msg?.msgType?.split("/")[0] == "application" ?
                                                                        null :
                                                                        <p onClick={() => updateMsgHandler(msg)} className='msg-edit-p' >Edit</p>
                                                                }
                                                                <p onClick={() => deleteMsgHandler(msg.msgId, roomId, msg?.url)} className='msg-edit-p'>Delete For EveryOne</p>
                                                            </div>
                                                            <div onClick={dropUpHandler} className='angle-up'  >
                                                                <   FaAngleUp />
                                                            </div>
                                                        </div> :
                                                            <>
                                                                <div className="msgParenttt">
                                                                    {
                                                                        msg?.msgType?.split("/")[0] == "image" ?

                                                                            <span className='msg-image' >
                                                                                <img src={msg.url} alt="" />
                                                                                <span className='img-angle' onClick={() => dropDownHandler(msg.timeStamp.seconds)}  > <FaAngleDown /> </span>
                                                                                <span className='msg-time' > {amPmTime}</span>
                                                                            </span>

                                                                            :
                                                                            msg?.msgType?.split("/")[0] == "video" ?

                                                                                <span className='msg-image' >

                                                                                    <video controls src={msg.url}></video>
                                                                                    <span className='msg-time' > {amPmTime}</span>
                                                                                    <span className='img-angle' onClick={() => dropDownHandler(msg.timeStamp.seconds)}  > <FaAngleDown /> </span>

                                                                                </span>
                                                                                :
                                                                                msg?.msgType?.split("/")[0] == "text" || msg?.msgType?.split("/")[0] == "application" ?

                                                                                    <p id='msg' className='file-msg'  >
                                                                                        <span style={{ fontSize: "14px" }} >File</span>: {msg.fileName}
                                                                                        <span className='angle-down' onClick={() => dropDownHandler(msg.timeStamp.seconds)}  > <FaAngleDown /> </span>
                                                                                        <span className='msg-time' > {amPmTime}</span>
                                                                                    </p>
                                                                                    :
                                                                                    <p id='msg'  >
                                                                                        {msg.message}
                                                                                        <span className='angle-down' onClick={() => dropDownHandler(msg.timeStamp.seconds)}  > <FaAngleDown /> </span>
                                                                                        <span className='msg-time' > {amPmTime}</span>
                                                                                    </p>
                                                                    }
                                                                    {
                                                                        msg.editStamp ? <div className="edited">Edited</div> : null
                                                                    }
                                                                </div>
                                                            </>
                                                    }
                                                    <div className="profile-pic">
                                                        <img src={msg.img} alt="" />
                                                    </div>
                                                </div>
                                        })
                                    }
                                    {
                                        showEmojiContainer ?
                                            <div className="emoji-container" >
                                                <Picker data={data} onEmojiSelect={addEmoji} maxFrequentRows={0} />
                                            </div> : null
                                    }
                                </div>
                            </div>

                        }
                        <div className="chatsFooter">
                            <div className="input">
                                <form onSubmit={senMsgHandler} action="">
                                    <input type="text" ref={inputRef} id='msg-input' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Your Message' />
                                    <MdOutlineEmojiEmotions className='emoji-icon' onClick={showEmojiContainerHandler} />

                                    <span><input onChange={uploadFileHandler} type="file" ref={fileInputRef} style={{ display: 'none' }} /><IoIosAttach onClick={handleFileIconClick} className='atach-file' /> </span>
                                    <button type='submit' ><IoMdSend /></button>
                                </form>
                            </div>
                        </div>
                    </div>)
            }

        </div>
    )
}

export default Home

