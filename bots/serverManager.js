var exports = module.exports = {};



exports.logCleanerBot = function() {
    
    // This bot saves the server logs to db then deletes the server logs folder every one hour
    // TO-DO send logs to server
    
    function doLogging(){
     console.log('deleting logs');
     
     var clearC = `
            cd
            cd logs
            rm -rf business.log
        `;
     
    nCmd.get(clearC, function (data, err, stderr) {
        if (!err) {
            var hMsg = 'deleted logs';
            console.log(hMsg);
            
        } else {
            console.log(err);
        }
    });
     
    }
    
    
   var dura=heartBeat*(3*60) 
 setInterval(function(){ 
 doLogging()
 }, dura);   
    doLogging();
    
  console.log('log monitor initialized..');   
    
}


exports.init = function () {


        console.log('INFO: starting log cleaner bot');
        exports.logCleanerBot();

}
