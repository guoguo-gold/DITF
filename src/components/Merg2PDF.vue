<template>
  <el-upload
      class="upload-pdf"
      drag
      action="http://127.0.0.1:5000/upload"
      multiple
      show-file-list
      :before-upload="beforeUpload"
      :limit="limit"
      :on-success="onsuccess"
      :on-exceed="onexceed"
  >
  <!--
      drag 控制拖拽上传
      action 控制传入地址
      multiple 控制多选文件
      show-file-list 是否显示文件

  -->
    <el-icon class="el-icon--upload">
      <upload-filled/>
    </el-icon>
    <div class="el-upload__text">
      拖动文件或<em>点击此处上传</em>
      <div class="el-upload__tip">
        pdf最大不超过10mb
      </div>
    </div>
  </el-upload>
  <el-button class="hebing" type="success">
    合并文件
  </el-button>
</template>

<script setup>
    import {ElNotification} from "element-plus";
    import {useStore} from 'vuex'
    const store = useStore()
    console.log(store.state.count)
    var file_name
    const limit = 2
    function beforeUpload(file) {
      file_name = file.name
      if (file.type != "application/pdf") {
        ElNotification({
          title: '上传失败',
          message: '请上传一个pdf文件',
          type: 'error',
        })
        return false
      }
      if (file.size > 10485760) {
        ElNotification({
          title: '上传失败',
          message: '上传文件不得大于10mb',
          type: 'error',
        })
        return false
      }
    }
    function onsuccess(){
      ElNotification({
        title: '上传成功',
        message: file_name,
        type: 'success',
      })
    }
    function onexceed(file){
      ElNotification({
        title: '上传失败',
        message: "超出数量限制，无法上传",
        type: 'error',
      })
    }
</script>

<style scoped>
  .upload-pdf{
    position: absolute;
    top: 85px;
    left: calc(50% - 300px);
    height:400px;
    width: 600px;
  }
  .hebing{
    position: absolute;
    top: 465px;
    left: calc(50% - 44px);
  }
</style>