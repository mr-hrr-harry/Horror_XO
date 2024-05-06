pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo 'building'
            }
        }
        stage("test"){
            steps{
                echo 'testing'
                println "Current Date: ${new Date()}"
                println "Current Working Directory: ${pwd()}"
                
                def files = sh(script: 'ls', returnStdout: true).trim().split('\n')
                    println "Files in the directory:"
                    files.each { println it }

                 writeFile file: 'new_file.txt', text: fileContent
                    echo "New file 'new_file.txt' created with content:"
                    sh "cat new_file.txt"
            }
        }
        stage("deploy"){
            steps{
                echo 'deploying'
            }
        }
    }
}
