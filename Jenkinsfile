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

                sh "ls"

                writeFile file: 'new_file.txt', text: fileContent
                echo "New file 'new_file.txt' created with content:"
                sh "echo \"Hey Harry\" > new_file.txt"
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
