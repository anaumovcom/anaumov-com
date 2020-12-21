const Deployer = require('ssh-deploy-release');

const options = {
    localPath: 'build',
    host: 'anaumov.com',
    username: 'root',
    password: 'NhJYZqit0u',
    deployPath: '/WEB/anaumovcom/',
    synchronizedFolder: 'www',
};

const deployer = new Deployer(options);
deployer.deployRelease(() => {
    console.log('Deployed successfully!');
});