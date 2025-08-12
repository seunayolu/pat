const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Welcome to Your Elastic Beanstalk Application</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f8f9fa; }
            .container { max-width: 900px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h1 { color: #232f3e; margin-bottom: 20px; }
            h2 { color: #232f3e; border-bottom: 2px solid #ff9900; padding-bottom: 10px; margin-top: 30px; }
            .btn { background: #ff9900; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 10px 0; }
            .btn:hover { background: #e68900; }
            ul { line-height: 1.6; }
            li { margin-bottom: 8px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to Your Elastic Beanstalk Application</h1>
            <p>Congratulations! Your AWS Elastic Beanstalk Node.js application is now running on version ${process.version}.</p>
            <a href="https://aws.amazon.com/elasticbeanstalk/" class="btn">Learn More</a>
            
            <h2>Benefits of AWS Elastic Beanstalk</h2>
            <ul>
                <li>Fast and simple to begin</li>
                <li>Impossible to outgrow</li>
                <li>Complete resource control</li>
                <li>No additional charges</li>
            </ul>
            
            <h2>Key Features</h2>
            <ul>
                <li>Easy application deployment</li>
                <li>Auto scaling</li>
                <li>Health monitoring</li>
                <li>Version management</li>
                <li>Configuration management</li>
            </ul>
            
            <h2>Resources and Documentation</h2>
            <ul>
                <li><a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html">AWS Elastic Beanstalk Documentation</a></li>
                <li><a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html">Deploying Node.js Applications</a></li>
                <li><a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html">Getting Started Guide</a></li>
            </ul>
        </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});