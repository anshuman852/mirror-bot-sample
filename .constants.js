module.exports = Object.freeze({
  TOKEN: 'bot_token',
  ARIA_SECRET: '9hGB33y540sQ27U',
  ARIA_DOWNLOAD_LOCATION: '/app/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/app', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: 'id_of_Drive_folder_to_upload_into',
  SUDO_USERS: [012, 345],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [678, 901],	// Telegram chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
