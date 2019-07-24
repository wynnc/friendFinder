var friends = require("../data/friends");

module.exports = function(app){

    app.get('/api/friends', function(req, res) {
        res.send(friends);
    })

    app.post('/api/friends', function(req, res) {
        
        //compare the peeps
        var maxNum = 41;
        var bestMatch;

        for(var i = 0; i < friends.length; i++){
            var score = 0;
            for(var j = 0; j < friends[i].scores.length; j++){
                score+= Math.abs(req.body.scores[j] - friends[i].scores[j])
            }

            if(score < maxNum){
                bestMatch = friends[i];
            }
        }
        friends.push(req.body);
        res.send(bestMatch);
    })
}