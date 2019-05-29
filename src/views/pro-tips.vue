<template>
  <div class="left-align">
    <h1>Pro-Tips</h1>

    <TreeList v-bind:msg="msg" />

    <!-- <ul>
      <li>
        <p>
          Instead of paying for Dreamweaver, Use
          <a href="https://www.jetbrains.com/student/">PHP Storm or WebStorm</a
          >. It's free for students and has a ton of stuff that makes life
          easier. For example, instead of having to edit your changes in an FTP
          each time, you can
          <a href="https://imgur.com/a/538JNTS">set up a remote host</a>, then
          <a href="https://imgur.com/tEU1thB">Set where your files are</a>, add
          the credentials in once and have it automatically upload to the server
          and you can view your changes with the Click of a button
        </p>
      </li>

      <li>
        <p>
          Use <a href="https://sass-lang.com/">SASS</a> because dealing with CSS
          can be Hell sometimes. and SASS/SCSS makes it so much easier. You can
          nest things, use variables, and more. I don't know what I'd do without
          it!
        </p>
      </li>
      <li>
        <p>
          If you don't already know, don't use Open Office. While you're a
          student you can get MS Office for free
          <a href="https://portal.office.com/">here!</a> Just sign in with your
          MSU email, And then click install office on the upper-right hand side
          of the screen.
        </p>
      </li>
    </ul> -->
  </div>
</template>

<style scoped></style>

<script>
import TreeList from "@/components/TreeList";
export default {
  components: { TreeList },
  data: () => ({
      msg: [
      {
        id: 1,
        name: "Don't Use DreamWeaver! Here are some alternatives :",
        children: [
          { id: 2, name: "Calendar : app" },
          { id: 3, name: "Chrome : app" },
          { id: 4, name: "Webstorm : app" }
        ]
      },
      {
        id: 5,
        name: "GitHub Student Developer Pack (The Big One):",
        children: [
          {
            id: 6,
            name: "vuetify :",
            children: [
              {
                id: 7,
                name: "src :",
                children: [
                  { id: 8, name: "index : ts" },
                  { id: 9, name: "bootstrap : ts" }
                ]
              }
            ]
          },
          {
            id: 10,
            name: "Use SASS to make CSS less of a nightmare! :",
            children: [
              {
                id: 11,
                name: "src :",
                children: [
                  { id: 12, name: "v-btn : ts" },
                  { id: 13, name: "v-card : ts" },
                  { id: 14, name: "v-window : ts" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: "Use SASS to make CSS less of a nightmare!",
        children: [
          { id: 16, name: "October : pdf" },
          { id: 17, name: "November : pdf" },
          { id: 18, name: "Tutorial : html" }
        ]
      },
      {
        id: 19,
        name: "Videos :",
        children: [
          {
            id: 20,
            name: "Tutorials :",
            children: [
              { id: 21, name: "Basic layouts : mp4" },
              { id: 22, name: "Advanced techniques : mp4" },
              { id: 23, name: "All about app : dir" }
            ]
          },
          { id: 24, name: "Intro : mov" },
          { id: 25, name: "Conference introduction : avi" }
        ]
      }
    ]
  })
};
</script>
