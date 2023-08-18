pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Connect to git'
                git branch: 'main', url: 'https://github.com/andang6797/Mock-NextTS.git'
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}