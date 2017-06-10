<template>
  <div class="message">
    <header class="header">
      <div class="friendname">{{selectedChat.user.name}}</div>
    </header>
    <div class="message-wrapper" ref="list">
      <ul v-if="selectedChat">
        <li v-for="item in selectedChat.messages" class="message-item">
          <div class="time">
            <span>{{item.date | time}}</span>
          </div>
          <div class="main" :class="{ self: item.self }">
            <img class="avatar" width="36" height="36" :src="item.self ? user.img : selectedChat.user.img" />
            <div class="content">
              <div class="text" v-html="replaceFace(item.content)"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
