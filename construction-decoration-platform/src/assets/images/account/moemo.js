//chatRoom
// .get("/", decode, chatRoomController.getAllRoom) // xong--
.get("/", decode, chatRoomController.getAllRoom) // xong--
.post("/:id/adduser", chatRoomController.addUser)
.post("/:id/deleteuser", chatRoomController.deleteUser)
.post("/:id/updategroupchat", chatRoomController.updateGroupRoom)
.get("/:roomId", chatRoomController.getConversationByRoomId)
.post("/check", chatRoomController.checkAvailableRoom) // xong
.post("/create", chatRoomController.create) // xong--
.post("/initiate", decode, chatRoomController.initiateRoom) // xong--
.post("/groupchat", decode,chatRoomController.createGroupChatroom)
// .post("/:roomId/message", decode, chatRoomController.postMessage) //xong--
.post("/:roomId/message", decode,chatRoomController.postMessage) //xong--
.post("/:id/adduser", chatRoomController.addUser) //xong--
.get("/:id/userrole",chatRoomController.updateUserRoleGroupChat)
// .post("/:id/userrole",chatRoomController.updateUserRoleGroupChat)
.put("/seen",decode, chatRoomController.seen)
.post("/getchatroom", decode,chatRoomController.getChatRoomById)

//delete
  .delete('/room/:roomId', deleteChatRoomController.deleteRoomById)
  .delete('/message/:messageId', deleteChatRoomController.deleteMessageById)

//store
//   .get('/', user.onGetAllUsers)
.post('/', store.onCreateStore)
//   .get('/:id', user.onGetUserById)
//   .delete('/:id', user.onDeleteUserById)

//user
  .get('/', user.onGetAllUsers)
  .post('/', decode,user.onCreateUser)
  .get('/:id', user.onGetUserById)
  .delete('/:id', user.onDeleteUserById)
  .put('/:id', user.updateUser)


