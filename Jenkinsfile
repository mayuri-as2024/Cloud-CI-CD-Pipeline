pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'cd app && npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Build Successful!'
            }
        }

    }
}