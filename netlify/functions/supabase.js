require('dotenv').config();
const { DATABASE_URL, SUPABASE_SERVICE_API_KEY } = process.env;

// Connect to our database
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {
    // Insert a row
    const { data, error } = await supabase.from('tester').insert([{ name: 'John Majors' }]);

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: data,
            error: error,
        }),
    };
};
