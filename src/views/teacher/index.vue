<template>
  <div class="teacher">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>导师信息</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="dialogFormVisible = true"
          >添加新导师</el-button
        >
      </div>
      <div v-for="(item, index) in teacherDataList" :key="index" class="item">
        <div class="teacher-name">{{ item.name }}</div>
        <div class="teacher-job-title">{{ item.job_title }}</div>
        <div class="teacher-work">
          {{ item.work }}
        </div>
        <div class="teacher-detail">
          {{ item.detail }}
        </div>

        <div class="controls">
          <el-button type="primary" @click="editData(item)">编辑</el-button>
          <el-button type="danger" @click="selectDeleteData(item)"
            >删除</el-button
          >
        </div>
      </div>
    </el-card>

    <el-dialog
      title="导师"
      :before-close="unSubmit"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form" label-width="80px" :rules="rules">
        <el-form-item label="导师姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="导师职称" prop="jobTitle">
          <el-input v-model="form.job_title"></el-input>
        </el-form-item>
        <el-form-item label="导师作品" prop="work">
          <el-input v-model="form.work"></el-input>
        </el-form-item>

        <el-form-item label="导师详情" prop="detail">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 6 }"
            v-model="form.detail"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(ruleForm)">提交</el-button>
          <el-button @click="unSubmit">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>确定要删除该信息吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteDate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    var teacherNameRule = (rule, value, callback) => {
      let strArr = value.split("");
      let bigWord = strArr.every((item) => {
        return item.charCodeAt() >= 65 && item.charCodeAt() <= 95;
      });
      console.log(bigWord);
      // var strCode = value.charCodeAt();
      console.log(strArr);
      // var strChart = value.charCaodeAt();
      if (value == "") {
        callback(new Error("请输入导师姓名"));
      } else if (value.length > 5 || value.length < 3) {
        callback(new Error("长度在 3 到 5 个字母"));
      } else if (!bigWord) {
        callback(new Error("请全部更改为大写字母"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        job_title: "",
        work: "",
        detail: "",
      },

      rules: {
        name: [
          { required: true, validator: teacherNameRule, trigger: "blur" },
          // { required: true, message: "请输入活动名称", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        jobTitle: [
          { required: true, message: "请输入导师职称", trigger: "blur" },
        ],
        work: [{ required: true, message: "请输入导师作品", trigger: "blur" }],
        detail: [
          { required: true, message: "请输入导师详情", trigger: "blur" },
        ],
      },
      dialogVisible: false,
      dialogFormVisible: false,
      isEdit: false,
      teacherDataList: [
        {
          id: 1,
          name: "HUAN",
          job_title: "音乐制作导师音乐制作导师",
          work: "《》",
          detail: `
         2018雅加达亚运会闭幕式杭州六分钟》《奔跑吧》《王牌对王牌2018雅加达亚运会闭幕式杭州六分钟》
          `,
        },
        {
          id: 2,
          name: "111",
          job_title: "音乐制作导师音乐制作导师",
          work: "《2018雅加达亚运会闭幕式杭州六分钟》《奔加达亚运会闭幕式杭州六分钟》《奔跑吧》《王牌对王牌》",
          detail: `
         2018雅加达亚运会闭幕式杭州六分钟》《奔跑吧牌对王牌2018雅加达亚运会闭幕式杭州六分钟》《奔跑吧》《王牌对王牌
          `,
        },
        {
          id: 3,
          name: "aaa",
          job_title: "音乐制作导师音乐制作导师",
          work: "wff",
          detail: `
         2018雅加达亚运会闭幕式杭州六分钟》《奔跑吧牌对王牌2018雅加达亚运会闭幕式杭州六分钟》《奔跑吧》《王牌对王牌
          `,
        },
      ],
      selectedDataId: null,
    };
  },
  methods: {
    editData(item) {
      this.form = JSON.parse(JSON.stringify(item));
      this.selectedDataId = item.id;
      this.isEdit = true;
      this.dialogFormVisible = true;
    },

    selectDeleteData(item) {
      this.selectedDataId = item.id;
      this.dialogVisible = true;
    },
    deleteDate() {
      var newDataList = JSON.parse(JSON.stringify(this.teacherDataList));
      this.teacherDataList.forEach((item, index) => {
        if (item.id == this.selectedDataId) {
          newDataList.splice(index, 1);
        }
      });
      this.dialogVisible = false;

      this.teacherDataList = newDataList;
    },

    onSubmit(formName) {
      if (this.isEdit) {
        var newDataList = JSON.parse(JSON.stringify(this.teacherDataList));
        newDataList = newDataList.map((item, index) => {
          if (item.id == this.selectedDataId) {
            item = this.form;
            console.log(item);
            return item;
          } else {
            return item;
          }
        });
        console.log(newDataList);
        this.teacherDataList = newDataList;
      } else {
        this.teacherDataList.push(this.form);
        this.form = {};
      }
      this.isEdit = false;
      this.dialogFormVisible = false;
    },
    unSubmit() {
      this.form = {};
      this.isEdit = false;
      this.dialogFormVisible = false;
    },
    showHtml(str) {
      return str
        .replace(str ? /&(?!#?\w+;)/g : /&/g, "&amp;")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;nbsp;/g, "\u3000")
        .replace(/&amp;rdquo;/g, "\“")
        .replace(/&amp;ldquo;/g, "\”");
    },
  },
};
</script>
<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0px 10px;
  border-bottom: 2px solid #eed4d4;

  .teacher-name {
    width: 80px;
    text-transform: uppercase;
  }

  .teacher-job-title {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .teacher-work {
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .teacher-detail {
    width: 400px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .controls {
    display: flex;
    gap: 10px;
  }
}
</style>
