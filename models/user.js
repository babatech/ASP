
module.exports =  function(databaseConnection) {
    return {
        login: function(email,password) {

            var userdetails = { name:email, password:password};
            if ( databaseConnection == null ) console.log('still nul');
            else console.log('not nul');

            databaseConnection.query("SELECT * FROM users where email = '"+email+"' and password = '"+password +"'", function (err, result) {
                if(err)
                {
                    console.log(result[0]+' err');
                    return null;
                }
                else {
                    console.log(result[0] + ' ress' );
                    console.log('query ok');
                    return result[0];
                }
                // console.log('The solution is: ', result); // object difference result is same
            });
        },
        fblogin: function(email,profileid) {
            //var userdetails = { name:email, password:profileid};
            databaseConnection.query("SELECT * FROM users where email = '"+email+"' and password = '"+profileid +"'", function (err, result) {
                if(err)
                {
                    console.log(result[0]+' err');


                }
                else {
                    //console.log(result[0] + ' ress' );
                    if (typeof result[0] === "undefined" ){
                        var userdetails = { name:email, password:profileid};
                        databaseConnection.query('INSERT INTO users  SET ?', userdetails, function(err,res){
                            if(err)
                            {console.log('err in insert fb');
                            }
                            else {
                                console.log('inserted fb');

                            }

                            return null;
                        });
                    }
                    //console.log('query ok');
                }
                // console.log('The solution is: ', result); // object difference result is same
            });
        },
        createuser: function(email,password){
            /*if(databaseConnection ==null)
                console.log('null');else
                console.log('not null');*/

            var userdetails = { name:email, password:password};

            databaseConnection.query('INSERT INTO users  SET ?', userdetails, function(err,res){
                if(err)
                {
                    // throw err;
                    return false;
                }
                else {

                    console.log('Last insert ID:', res.insertId);
                    return true;
                }
            });
        },
        twitterlogin: function(email,profileid){
            return null;
        }
    }
};