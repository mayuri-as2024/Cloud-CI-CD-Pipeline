pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Repository cloned successfully.'
            }
        }

        stage('CI Pipeline') {
            steps {
                sh 'ls -la'
                echo 'Jenkins Pipeline Executed Successfully!'
            }
        }

        stage('Build Complete') {
            steps {
                echo 'Build Successful!'
            }
        }
    }
}