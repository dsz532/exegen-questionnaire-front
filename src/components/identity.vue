<template>
  <div>
    <label for="identity-select">请选择您的身份：</label>
    <select id="identity-select" v-model="selectedIdentity">
      <option disabled value="">请选择</option>
      <option value="expert">专家</option>
      <option value="student">学生</option>
    </select>
    <p>您选择的身份是：{{ selectedIdentity }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIdentity: "", // 用于存储用户选择的身份
    };
  },
  watch: {
    // 监听 selectedIdentity 的变化
    selectedIdentity(newVal) {
      if (newVal) {
        // 将选择的身份保存到 localStorage
        localStorage.setItem("userIdentity", newVal);
        // 通知父组件
        this.$emit("identity-selected", newVal);
      }
    },
  },
  mounted() {
    // 组件挂载时，从 localStorage 中读取之前保存的身份
    const savedIdentity = localStorage.getItem("userIdentity");
    if (savedIdentity) {
      this.selectedIdentity = savedIdentity;
      // 如果有保存的身份，也通知父组件
      this.$emit("identity-selected", savedIdentity);
    }
  },
};
</script>

<style scoped>
/* 添加一些简单的样式 */
label {
  margin-right: 10px;
}

select {
  padding: 5px;
}

p {
  margin-top: 10px;
  font-weight: bold;
}
</style>