<template>
  <div>
    <v-container>
      <v-card height="300">
        <v-card-title>동영상 제목</v-card-title>
        <v-card-subtitle>부제</v-card-subtitle>
        <v-card-text>
          설명
        </v-card-text>
        <v-card-actions>
          <v-btn outlined id="click" @click="onClick">Click</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push({
        name: 'Video',
      });
    },
  },
};
</script>

<style scoped></style>
