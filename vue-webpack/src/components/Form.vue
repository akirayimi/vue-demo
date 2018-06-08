<template>
    <div>
        <el-form   action="http://www.akirayimi.cn">
            <p v-if="isError">
                <b>please correct following fields:</b>
                <ul v-for="(item, key) in errorList" :key="key">{{item}}</ul>
            </p>
            <el-form-item label="name">
                <el-input v-model="name"></el-input>
            </el-form-item>
             <el-form-item label="phone">
                <el-input v-model="phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="checkForm">submit</el-button>
                <el-button>cancle</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      errorList: [],
      name: null,
      phone: null,
      isError: false
    };
  },

  methods: {
    checkForm(e) {
      if (this.name && this.phone) {
        this.isError = false;
        return true;
      }
      this.errorList = [];
      this.isError = true;
      if (!this.name) this.errorList.push("name shouldn't be null");
      if (!this.phone) this.errorList.push("phone shouldn't be null");
      e.preventDefault();
    }
  }
};
</script>
