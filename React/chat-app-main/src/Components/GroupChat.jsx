
import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import { useFireBase } from '../../firebase/fireBaseContext'
import { Md5G } from 'react-icons/md'
import { FaFile } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";


const GroupChat = ({ chatData, logUserData, showEmojiContainer, addEmoji, setDropDownId, dropDownId, groupRoomId, updateMsgHandler, dropUpHandler, downLoadImage }) => {

    const { deleteGroupMsg } = useFireBase()


    return (
        <div className="chatsList">
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


                        return msg.senderId !== logUserData?.uid ? <div key={i} className="recieveMsg">

                            <div className="profile-pic">
                                <img src={msg.img} alt="" />
                            </div>
                            {
                                msg.timeStamp.seconds == dropDownId ? <div className="download-img">
                                    <div>
                                        <p onClick={() => downLoadImage(msg.url, msg.msgType.split("/")[1])} > Downlaod {msg.msgType.split("/")[0]}  </p>
                                    </div>
                                    <div onClick={dropUpHandler} className='angle-up'  >
                                        <   FaAngleUp />
                                    </div>
                                </div> : <div className='msgParenttt' >

                                    {
                                        msg?.msgType?.split("/")[0] == "image" ? <span className='msg-image' >
                                            <img src={msg.url} alt="" />
                                            <span className='msg-time' >  {amPmTime} </span>
                                            <span className='img-angle'   > <FaAngleDown onClick={() => setDropDownId(msg.timeStamp.seconds)} /> </span>
                                        </span>
                                            :

                                            msg?.msgType?.split("/")[0] == "video" ?
                                                <span className='msg-image' >
                                                    <video controls src={msg.url}></video>
                                                    <span className='msg-time' > {amPmTime}</span>
                                                </span> :
                                                msg?.msgType?.split("/")[0] == "text" || msg?.msgType?.split("/")[0] == "application" ?
                                                    <p className='file-msg'  >

                                                        <span style={{ fontSize: "14px" }} ><FaFile style={{ fontSize: "24px" }} /> : {msg.fileName}</span>

                                                        <span className='msg-time' >  {amPmTime} </span>
                                                        <span className='angle-down'  > <FaAngleDown  onClick={() => setDropDownId(msg.timeStamp.seconds)} /> </span>
                                                    </p> :
                                                    msg?.msgType?.split("/")[0] == "audio" ?
                                                        <div className='audio-container' >
                                                            <audio controls  >
                                                                <source src={msg.url} type={msg.msgType} />
                                                            </audio>
                                                            <span className='msg-time' > {amPmTime}</span>
                                                        </div>

                                                        :

                                                        <p   >
                                                            {msg.message}
                                                            <span className='msg-time' >  {amPmTime} </span>
                                                        </p>

                                    }





                                </div>
                            }



                        </div> :
                            <div key={i} className="sendMsg">

                                {
                                    msg.timeStamp.seconds == dropDownId ? <div className="msg-edit">
                                        <div>

                                            {
                                                msg?.msgType?.split("/")[0] == "image" || msg?.msgType?.split("/")[0] == "video" || msg?.msgType?.split("/")[0] == "text" || msg?.msgType?.split("/")[0] == "application" || msg?.msgType?.split("/")[0] == "audio" ? null : <p className='msg-edit-p' onClick={() => updateMsgHandler(msg)}   >Edit</p>
                                            }
                                            <p className='msg-edit-p' onClick={() => deleteGroupMsg(groupRoomId, msg.msgId,msg?.url)}  >Delete For EveryOne</p>
                                        </div>
                                        <div className='angle-up'  >
                                            <   FaAngleUp onClick={() => setDropDownId("")} />
                                        </div>
                                    </div> :
                                        <>
                                            <div className="msgParenttt">
                                                {
                                                    msg?.msgType?.split("/")[0] == "image" ? <span className='msg-image'  >
                                                        <img src={msg.url} alt="" />
                                                        <span className='img-angle'   > <FaAngleDown onClick={() => setDropDownId(msg.timeStamp.seconds)} /> </span>
                                                        <span className='msg-time' > {amPmTime}</span>
                                                    </span>
                                                        : msg?.msgType?.split("/")[0] == "video" ?

                                                            <span className='msg-image' style={{ marginBottom: '20px' }}  >
                                                                <video controls src={msg.url}></video>
                                                                <span className='msg-time' > {amPmTime}</span>
                                                                <span className='img-angle' > <FaAngleDown onClick={() => setDropDownId(msg.timeStamp.seconds)} /> </span>

                                                            </span>
                                                            :
                                                            msg?.msgType?.split("/")[0] == "text" || msg?.msgType?.split("/")[0] == "application" ? <p id='msg' className='file-msg'  >
                                                                <span style={{ fontSize: "24px" }} ><FaFile /></span>: {msg.fileName}
                                                                <span className='angle-down' > <FaAngleDown onClick={() => setDropDownId(msg.timeStamp.seconds)} /> </span>
                                                                <span className='msg-time' >{amPmTime}</span>
                                                            </p>
                                                                :



                                                                msg?.msgType?.split("/")[0] == "audio" ?
                                                                    <div className='audio-container' >
                                                                        <span className='angle-down' > <FaAngleDown onClick={() => setDropDownId(msg.timeStamp.seconds)} /> </span>
                                                                        <audio controls  >
                                                                            <source src={msg.url} type={msg.msgType} />
                                                                        </audio>
                                                                        <span className='msg-time' > {amPmTime}</span>
                                                                    </div>
                                                                    :


                                                                    <p id='msg'   >
                                                                        {msg.message}
                                                                        <span className='angle-down'  > <FaAngleDown onClick={() => setDropDownId(msg.timeStamp.seconds)} /> </span>
                                                                        <span className='msg-time' > {amPmTime}</span>
                                                                    </p>

                                                }
                                                {
                                                    msg.editStamp ?
                                                        <div className="edited">Edited</div> : null

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
    )
}

export default GroupChat