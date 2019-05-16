<template>
    <div>
        <p>Repositories grabbed: {{ repositoriesCount }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                myGitHubData: {},
                myRepoData: {}

            }
        },
        mounted: function () {
            this.GitHubAPI.get('/user/repos', {}, [this.myGitHubData, 'user'])
            this.GitHubAPI.get('/user/repos', {}, [this.myRepoData, 'repositories'])
            //this.GitHubAPI.get('/user/avatar_url', {}, [this.myGitHubData, 'avatar'])
        },

        props: {
            //this.myGitHubData.user.avatar_url
        },
        computed: {
            repositoriesCount: function () {
                if (this.myRepoData.repositories) {
                    return this.myRepoData.repositories.length
                }
                return 'none yet...'
            }
        }
    }
</script>

<style scoped>

</style>