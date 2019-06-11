var dlDetail = require('./dl-detail');

// This bot isn't meant for public groups, so just using arrays and linear search to find downloads here.
var allDownloads = {};
var activeDownloads = {};

function addDownload (gid, msg, statusMsg, isTar) {
  var username;
  if (msg.from.username) {
    username = '@' + msg.from.username;
  } else {
    username = msg.from.first_name;
  }

  /* dlVars.statusMsgsList.push({
    message_id: statusMsg.message_id,
    chat: {
      id: statusMsg.chat.id,
      all_members_are_administrators: statusMsg.chat.all_members_are_administrators
    },
    from: { id: statusMsg.from.id }
  }); */

  var downloadDetail = new dlDetail.DlDetail(gid, msg.from.id, username, msg.chat.id,
    msg.message_id, statusMsg.message_id, isTar);
  allDownloads[gid] = downloadDetail;
}

function makeDownloadActive (gid) {
  activeDownloads[gid] = allDownloads[gid];
}

/**
 * Once a download as complete, call this to release references to the download details
 * @param {string} gid The GID of the download to delete
 */
function deleteDownload (gid) {
  delete activeDownloads[gid];
  delete allDownloads[gid];
}

function getAllDlCount () {
  return Object.keys(allDownloads).length;
}

/**
 *  Find download details
 * @param {string} gid The GID of the download to find
 * @param {boolean} isAllDownloads True to search in all downloas, false to search only active downloads
 * @returns {Object} The download details. undefined if not found.
 */
function findDownloadByGid (gid, isAllDownloads) {
  var list = isAllDownloads ? allDownloads : activeDownloads;
  return list[gid];
}

module.exports.addDownload = addDownload;
module.exports.findDownloadByGid = findDownloadByGid;
module.exports.makeDownloadActive = makeDownloadActive;
module.exports.deleteDownload = deleteDownload;
module.exports.allDownloads = allDownloads;
module.exports.activeDownloads = activeDownloads;
module.exports.getAllDlCount = getAllDlCount;
