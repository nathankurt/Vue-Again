<template>
  <div class="left-align">
    <h1>Pro-Tips</h1>
    <h2>Some tips to help when you first start to learn Web Development</h2>

    <Expansion v-bind:msg="msg1" />
  </div>
</template>

<style scoped></style>

<script>
import Expansion from "@/components/Expansion";
export default {
  components: { Expansion },
  data: () => ({
    msg1: [
      {
        title: "GitHub Student Developer Pack (The Big One)",
        text:
          "<p> So GitHub has this great thing going to help student developers called the <a href='https://education.github.com/pack'>Student Developer Pack!</a> It's fantastic and gives you tons and tons of free software and unlimited private repos while you're a student. If you haven't taken advantage of this yet, it's definitely something to get on ASAP!"
      },
      {
        title: "Dreamweaver Alternatives",
        text:
          '<p>Instead of paying for Dreamweaver, Use <a href="https://www.jetbrains.com/student/">PHP Storm or WebStorm</a>. It\'s free for students and has a ton of stuff that makes life easier. For example, instead of having to edit your changes in an FTP each time, you can <a href="https://imgur.com/a/538JNTS">set up a remote host</a>, then <a href="https://imgur.com/tEU1thB">Set where your files are</a>, add the credentials in once and have it automatically upload to the server and you can view your changes with the Click of a button </p>'
      },

      {
        title: "Use SASS To Deal With CSS",
        text:
          "<p>Use <a href=\"https://sass-lang.com/\">SASS</a> because dealing with CSS can be Hell sometimes. and SASS/SCSS makes it so much easier. You can nest things, use variables, and more. I don't know what I'd do without it!</p>"
      },
      {
        title: "Get MS Office For Free!",
        text:
          "<p>I know it's not really related to web development, but if you don't already know, don't use Open Office. While you're a student you can get MS Office for free <a href='https://portal.office.com'>here!</a> Just sign in with your MSU email, And then click install office on the upper-right hand side of the screen.</p>"
      }
    ]
  })
};
</script>
