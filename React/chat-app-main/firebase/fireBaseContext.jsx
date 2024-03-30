import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { useContext } from "react";
import { GoogleAuthProvider, confirmPasswordReset, getAuth, signInWithPopup, signOut } from "firebase/auth"
import { collection, addDoc, getFirestore, getDocs, where, query, doc, updateDoc, getDoc, arrayRemove, connectFirestoreEmulator, Firestore, deleteDoc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getEmojiDataFromNative } from "emoji-mart";



// firebase login


const firebaseConfig = {
  apiKey: "AIzaSyA8XL1KjqrQ3GTB2ya9DC228piv0wmrPWg",
  authDomain: "chit-chat-boot.firebaseapp.com",
  projectId: "chit-chat-boot",
  storageBucket: "chit-chat-boot.appspot.com",
  messagingSenderId: "673773387504",
  appId: "1:673773387504:web:85337546fa36476ad3cc35",
  measurementId: "G-YSDXRVSEZK"
};
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app)
const col = collection(fireStore, "users")
const FireBaseContext = createContext("");

export const useFireBase = () => {
  return useContext(FireBaseContext)
}
export const FireBaseProvider = ({ children }) => {


  const googleSignIn = async (navigate) => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    try {
      const res = await signInWithPopup(auth, provider)
      const user = res.user
      const { accessToken, displayName, email, photoURL, uid } = user
      const q = query(col, where('email', '==', email));
      const snapshot = await getDocs(q);
      const userExist = snapshot.docs.map((data) => {
        return { ...data.data(), id: data.id }
      })


      if (userExist.length == 0) {
        await addDoc(col, { accessToken, displayName, email, photoURL, uid, isActive: true });
        const q = query(col, where('email', '==', email));
        const snapshot = await getDocs(q);
        const newData = snapshot.docs.map((data) => {
          return { ...data.data(), id: data.id }
        })
        localStorage.setItem("chatUser", JSON.stringify({ accessToken, displayName, email, photoURL, uid, id: newData[0]?.id }))
      }
      else {
        try {
          const docRef = doc(fireStore, "users", userExist[0]?.id)
          const dataSnap = await getDoc(docRef)
          await updateDoc(docRef, {
            isActive: true
          })
        } catch (error) {
          console.log(error)
        }

        localStorage.setItem("chatUser", JSON.stringify({ accessToken, displayName, email, photoURL, uid, id: userExist[0]?.id }))
      }

      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }


  const googleSignOut = async (navigate, id) => {
    const auth = getAuth(app)
    try {
      showOfline(id)
      await signOut(auth)
      localStorage.removeItem("chatUser")
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }


  const getAllUser = async () => {
    try {
      const alluser = await getDocs(col)
      const data = alluser.docs.map((user) => {
        return user.data()
      })

      return data
    } catch (error) {
      console.log(error)
    }
  }


  const createRoom = async (logUserId, friendId) => {
    try {
      const chatCol = collection(fireStore, "chats",)
      await addDoc(chatCol, {
        roomid: logUserId + friendId,
        mes: []
      })
      console.log("room created")
    } catch (error) {
      console.log(error)
    }
  }


  const checkRoom = async (logUserId, friendId) => {
    const roomId1 = logUserId + friendId
    const roomId2 = friendId + logUserId
    try {
      const chatCol = collection(fireStore, "chats",)
      const q = query(chatCol, where('roomid', "in", [roomId1, roomId2]))
      const querySnapShot = await getDocs(q)
      const data = querySnapShot.docs.map((chat) => {
        return chat.data()
      })
      if (data.length == 0) {
        createRoom(logUserId, friendId)
        try {
          const q = query(chatCol, where('roomid', "in", [roomId1, roomId2]))
          const querySnapShot = await getDocs(q)
          const data = querySnapShot.docs.map((chat) => {
            return { ...chat.data(), fetchId: chat.id }
          })
          return data[0]
        } catch (error) {
          console.log(error)
        }
      }
      else {
        try {
          const q = query(chatCol, where('roomid', "in", [roomId1, roomId2]))
          const querySnapShot = await getDocs(q)
          const data = querySnapShot.docs.map((chat) => {
            return { ...chat.data(), fetchId: chat.id }
          })
          return data[0]
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }


  const sendMsg = async (roomId, msg) => {
    try {
      const mesRef = doc(fireStore, "chats", roomId)
      const docSnap = await getDoc(mesRef)
      const mesg = docSnap.data()
      await updateDoc(mesRef, {
        mes: [...mesg.mes, msg]
      })

    } catch (error) {
      console.log(error)
    }
  }


  const deleteMsg = async (msgId, roomId, url) => {


    if (url) {
      try {
        const storage = getStorage(app)
        const storageRef = ref(storage, url)
        await deleteObject(storageRef)
      } catch (error) {
        console.log(error)
      }
    }

    try {
      const docRef = doc(fireStore, "chats", roomId)
      const dataSnap = await getDoc(docRef)
      const data = dataSnap.data()
      // console.log(data)
      const filterData = data.mes.filter((msg) => {
        return msg.msgId !== msgId
      })
      await updateDoc(docRef, {
        mes: filterData
      })
    } catch (error) {
      console.log(error)
    }
  }


  const upDateMsg = async (editStamp, input, roomId, msgId) => {
    try {
      const docRef = doc(fireStore, "chats", roomId)
      const dataSnap = await getDoc(docRef)
      const data = dataSnap.data()
      const newMsgArr = data.mes.map((msg) => {
        if (msg.msgId == msgId) {
          return { ...msg, message: input, editStamp: editStamp }
        }
        return msg
      })
      console.log(newMsgArr)
      await updateDoc(docRef, {
        mes: newMsgArr
      })
    } catch (error) {
      console.log(error)
    }
  }


  const showOfline = async (id) => {

    try {
      const docRef = doc(fireStore, "users", id)
      const docData = await getDoc(docRef)
      await updateDoc(docRef, {
        isActive: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  const tabShowOnline = async (isTabVisible, id) => {

    try {
      const docRef = doc(fireStore, "users", id)
      const docSnap = await getDoc(docRef)
      if (isTabVisible) {
        await updateDoc(docRef, {
          isActive: true
        })
      }
      else {
        await updateDoc(docRef, {
          isActive: false
        })
      }

    } catch (error) {
      console.log(error)
    }
  }
  const closeTab = async (id) => {
    try {
      const docRef = doc(fireStore, "users", id)
      const docSnap = await getDoc(docRef)

      await updateDoc(docRef, {
        isActive: false
      })

    } catch (error) {
      console.log(error)
    }
  }


  const uploadFile = async (file, fileName, msg, roomId) => {

    try {
      const storage = getStorage(app)
      const storageRef = ref(storage, `images/${fileName}`)
      await uploadBytes(storageRef, file)
      const imageUrl = await getDownloadURL(storageRef)

      try {
        const mesRef = doc(fireStore, "chats", roomId)
        const docSnap = await getDoc(mesRef)
        const mesg = docSnap.data()
        await updateDoc(mesRef, {
          mes: [...mesg.mes, { ...msg, url: imageUrl, fileName: fileName }]
        })
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }




  const uploadGroupFile = async (file, fileName, msg, roomId) => {

    try {
      const storage = getStorage(app)
      const storageRef = ref(storage, `images/${fileName}`)
      await uploadBytes(storageRef, file)
      const imageUrl = await getDownloadURL(storageRef)

      try {
        const mesRef = doc(fireStore, "groupChat", roomId)
        const docSnap = await getDoc(mesRef)
        const mesg = docSnap.data()
        console.log(mesg)
        await updateDoc(mesRef, {
          mes: [...mesg.mes, { ...msg, url: imageUrl, fileName: fileName }]
        })
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }







  const createGroupRoom = async (file, fileName, name, users, adminId) => {
    try {

      const storage = getStorage(app)
      const storageRef = ref(storage, `images/${fileName}`)
      await uploadBytes(storageRef, file)
      const imageUrl = await getDownloadURL(storageRef)



      const groupRoomCol = collection(fireStore, "groupChat")
      const ccc = await addDoc(groupRoomCol, {
        isGroup: true,
        groupImage: imageUrl,
        groupName: name,
        users: users,
        mes: [],
        admins: [adminId]
      })

      try {
        const docRef = doc(fireStore, "groupChat", ccc.id)
        await updateDoc(docRef, {
          roomId: ccc.id
        })
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }



  const addGroupChat = async (id, msg) => {



    try {
      const mesRef = doc(fireStore, "groupChat", id)
      const docSnap = await getDoc(mesRef)
      const mesg = docSnap.data()
      await updateDoc(mesRef, {
        mes: [...mesg.mes, msg]
      })

    } catch (error) {
      console.log(error)
    }

  }


  const deleteGroupMsg = async (roomId, msgId, url) => {
    if (url) {
      try {
        const storage = getStorage(app)
        const storageRef = ref(storage, url)
        await deleteObject(storageRef)
      } catch (error) {
        console.log(error)
      }
    }

    try {
      const docRef = doc(fireStore, "groupChat", roomId)
      const dataSnap = await getDoc(docRef)
      const data = dataSnap.data()
      // console.log(data)
      const filterData = data.mes.filter((msg) => {
        return msg.msgId !== msgId
      })
      await updateDoc(docRef, {
        mes: filterData
      })
    } catch (error) {
      console.log(error)
    }
  }


  const updateGroupMsg = async (roomId, msgId, input, editStamp) => {
    try {
      const docRef = doc(fireStore, "groupChat", roomId)
      const dataSnap = await getDoc(docRef)
      const data = dataSnap.data()
      const newMsgArr = data.mes.map((msg) => {
        if (msg.msgId == msgId) {
          return { ...msg, message: input, editStamp: editStamp }
        }
        return msg
      })
      console.log(newMsgArr)
      await updateDoc(docRef, {
        mes: newMsgArr
      })
    } catch (error) {
      console.log(error)
    }
  }


  const getMemberData = async (uid) => {
    try {
      const q = query(col, where('uid', '==', uid));
      const snap = await getDocs(q)
      const memberData = snap.docs.map((data) => {
        return data.data()
      })
      return memberData[0]
    } catch (error) {
      console.log(error)
    }
  }

  const getadminsData = async (uid) => {
    try {
      const q = query(col, where('uid', '==', uid));
      const snap = await getDocs(q)
      const memberData = snap.docs.map((data) => {
        return data.data()
      })
      return memberData[0]
    } catch (error) {
      console.log(error)
    }
  }


  const addNewAdmin = async (id, newAdmin) => {
    try {
      const groupRef = doc(fireStore, "groupChat", id)
      const docSnap = await getDoc(groupRef)
      const groupData = docSnap.data()
      await updateDoc(groupRef, {
        admins: [...groupData.admins, ...newAdmin]
      })

    } catch (error) {
      console.log(error)
    }
  }


  const addNewMember = async (id, newMember) => {
    try {
      const groupRef = doc(fireStore, "groupChat", id)
      const docSnap = await getDoc(groupRef)
      const groupData = docSnap.data()
      await updateDoc(groupRef, {
        users: [...groupData.users, ...newMember]
      })

    } catch (error) {
      console.log(error)
    }
  }



  const removeGroupMember = async (id, removeArr) => {
    try {
      const groupRef = doc(fireStore, "groupChat", id)
      const docSnap = await getDoc(groupRef)
      const groupData = docSnap.data()

      const filterUsers = groupData.users.filter((user) => !removeArr.includes(user))
      const filterAdmin = groupData.admins.filter((admin) => !removeArr.includes(admin))
      await updateDoc(groupRef, {
        users: filterUsers,
        admins: filterAdmin
      })
    } catch (error) {
      console.log(error)
    }
  }


  const leftGroup = async (id, userId) => {
    try {
      const docRef = doc(fireStore, "groupChat", id)
      const snap = await getDoc(docRef)
      const data = snap.data()


      // console.log(data)
      if (data.admins.length == 1) {
        console.log("its working")
        data.admins.push(data.users[1])
      }


      const filterMemeber = data.users.filter((user) => {
        return user !== userId
      })
      const filterAdmin = data.admins.filter((user) => {
        return user !== userId
      })

      await updateDoc(docRef, {
        users: filterMemeber,
        admins: filterAdmin
      })
    } catch (error) {
      console.log(error)
    }
  }


  const deleteGroup = async (id) => {
    try {
      const docRef = doc(fireStore,"groupChat", id)
      await deleteDoc(docRef)
    } catch (error) {
      console.log(error)
    }
  }



  const editGroupImage = async (fileName,file) =>{
    try {
      const storage = getStorage(app)
      const storageRef = ref(storage, `images/${fileName}`)
      await uploadBytes(storageRef, file)
      const imageUrl = await getDownloadURL(storageRef)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

  }, [])

  return <FireBaseContext.Provider value={{ googleSignIn, googleSignOut, getAllUser, checkRoom, sendMsg, deleteMsg, upDateMsg, tabShowOnline, uploadFile, closeTab, createGroupRoom, addGroupChat, deleteGroupMsg, updateGroupMsg, uploadGroupFile, getMemberData, getadminsData, addNewAdmin, removeGroupMember, addNewMember, leftGroup,deleteGroup }} >{children}</FireBaseContext.Provider>;
};
