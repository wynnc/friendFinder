module.exports = function(app){

    app.get('/api/friends', function(req, res) {
        res.send(responses);
    })

    app.post('/api/frieds', function(req, res) {
        response.push(req.body);
        res.send(true);
    })
}