<template>
  <div id="container1">
    <h1 id="water1">WATER</h1>
  </div>
</template>

<style scoped lang="scss">
#container1 {
  width: 100%;
  height: 200px;
  background-color: #333333;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

#water1 {
  font-size: 6rem;
  line-height: 1;
  height: 50%;
  vertical-align: top;
  color: rgba(255, 255, 255, 0.3);
  background: url('/programmer/image/resource/water.png');
  background-repeat: repeat-x;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  animation: water 8s linear infinite;
}

@keyframes water {
  0% {
    background-position: left 0 top 40px;
  }
  40% {
    background-position: left 300px top -40px;
  }
  60% {
    background-position: left 600px top -60px;
  }
  100% {
    background-position: left 800px top 40px;
  }
}
</style>
