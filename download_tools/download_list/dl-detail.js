module.exports = {
  gid: undefined,
  tgFromId: undefined,
  tgUsername: undefined,
  tgChatId: undefined,
  tgCmdMsgId: undefined,
  tgCmdConfirmMsgId: undefined,
  isTar: undefined,
  isDownloadAllowed: undefined,
  isDownloading: undefined,
  isUploading: undefined,
  statusMsgId: undefined // Not the same as the statusMsgId before the refactor
};

function DlDetail (gid, tgFromId, tgUsername, tgChatId, tgCmdMsgId, tgCmdConfirmMsgId, isTar) {
  this.gid = gid;
  this.tgFromId = tgFromId;
  this.tgUsername = tgUsername;
  this.tgChatId = tgChatId;
  this.tgCmdMsgId = tgCmdMsgId;
  this.tgCmdConfirmMsgId = tgCmdConfirmMsgId;
  this.isTar = isTar;
}

module.exports.DlDetail = DlDetail;
