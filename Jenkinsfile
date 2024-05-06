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
                println "Current Working Directory: ${new File(".").canonicalPath}"
            }
        }
        stage("deploy"){
            steps{
                echo 'deploying'
            }
        }
    }
}
