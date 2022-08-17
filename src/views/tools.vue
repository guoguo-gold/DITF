<template>
  <el-upload
      class="upload-pdf"
      drag
      action="../src/py/merg2pdf.php"
      multiple
      show-file-list
      :before-upload="beforeUpload"
      :limit="limit"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖动文件或<em>点击此处上传</em>
      <div class="el-upload__tip">
        pdf最大不超过10mb
      </div>
    </div>
  </el-upload>
</template>

<script setup>
    import {ElNotification} from "element-plus";

    const limit = 2
    function beforeUpload(file){
      if(file.type != "application/pdf"){
        ElNotification({
          title: '上传失败',
          message: '请上传一个pdf文件',
          type: 'error',
        })
        return false
      }
      if(file.size > 10485760){
        ElNotification({
          title: '上传失败',
          message: '上传文件不得大于10mb',
          type: 'error',
        })
        return false
      }
    }
</script>

<style scoped>
  .upload-pdf{
    position: absolute;
    top: 65px;
    left: calc(50% - 300px);
    height:400px;
    width: 600px;
  }
</style>