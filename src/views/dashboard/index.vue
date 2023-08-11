<template>
  <div class="dashboard-container">
    <div class="dashboard-text">slogan</div>
    <div class="flex textBox">
      <p>
        {{ slogan[0] }}
      </p>
      <p>{{ slogan[1] }}</p>
      <p>
        {{ slogan[2] }}
      </p>
    </div>
    <div class="flex inputBox">
      <el-input
        v-model="slogan[0]"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
      />
      <el-input
        v-model="slogan[1]"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
      />
      <el-input
        v-model="slogan[2]"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
      />
    </div>
    <div class="dashboard-text Promotional">宣传作品名称</div>
    <el-input v-model="worksName" placeholder="请输入内容" />
    <div class="dashboard-text Promotional">宣传作品地址</div>
    <el-input v-model="worksAddress" placeholder="请输入内容" />
    <div class="dashboard-text Promotional">产品体系</div>
    <div class="row">
      <div class="col-3">
        <h3 style="margin-left: 24px">主体课程</h3>
        <draggable class="list-group" :list="courseList" group="people">
          <div
            v-for="(element, index) in courseList"
            :key="element.value"
            class="list-group-item"
          >
            <p v-if="courseType !== index">{{ element.value }}</p>
            <input
              v-if="courseType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            >
            <div>
              <el-checkbox
                v-model="element.vip"
                class="checked"
              >VIP</el-checkbox>
              <el-button
                size="mini"
                type="danger"
                @click="courseDelete(index)"
              >删除</el-button>
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'courseType')"
              >修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button style="margin-left: 24px" type="primary">添加</el-button>
      </div>
      <div class="col-3">
        <h3 style="margin-left: 24px">综合增值服务</h3>
        <draggable class="list-group" :list="serviceList" group="people">
          <div
            v-for="(element, index) in serviceList"
            :key="element.value"
            class="list-group-item"
          >
            <p v-if="serviceType !== index">{{ element.value }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            >
            <div>
              <el-checkbox
                v-model="element.vip"
                class="checked"
              >VIP</el-checkbox>
              <el-button
                size="mini"
                type="danger"
                @click="serviceDelete(index)"
              >删除</el-button>
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'serviceType')"
              >修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button style="margin-left: 24px" type="primary">添加</el-button>
      </div>
      <div class="col-3">
        <h3 style="margin-left: 24px">音乐艺术指导</h3>
        <draggable class="list-group" :list="directionList" group="people">
          <div
            v-for="(element, index) in directionList"
            :key="element.value"
            class="list-group-item"
          >
            <p v-if="directionType !== index">{{ element.value }}</p>
            <input
              v-if="directionType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            >
            <div>
              <el-checkbox
                v-model="element.vip"
                class="checked"
              >VIP</el-checkbox>
              <el-button
                size="mini"
                type="danger"
                @click="directionDelete(index)"
              >删除</el-button>
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'directionType')"
              >修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button style="margin-left: 24px" type="primary">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'Dashboard',
  components: {
    draggable
  },
  data() {
    return {
      slogan: [
        '十万象限 是杭州首家拥有 十年音乐传媒行业经验的专业团队 由世界艺术名校海归艺术家导师及 独立音乐人联合创立',
        '音乐艺术作品集教育 留学申请规划 以及 跨界艺术联动',
        '以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer 开发艺术领域的无限可能性'
      ],
      courseList: [
        { value: 'John', vip: false },
        { value: 'Joao', vip: false },
        { value: 'Jean', vip: false },
        { value: 'Gerard', vip: false }
      ],
      serviceList: [
        { value: 'Juan', vip: false },
        { value: 'Edgard', vip: false },
        { value: 'Johnson', vip: false }
      ],
      directionList: [
        { value: 'Juan', vip: false },
        { value: 'Edgard', vip: false },
        { value: 'Johnson', vip: false }
      ],
      worksAddress: '',
      worksName: '',
      checked: false,
      courseType: '',
      serviceType: '',
      directionType: ''
      // input: ''
    }
  },
  methods: {
    courseDelete(index) {
      this.courseList.splice(index, 1)
    },
    serviceDelete(index) {
      this.serviceList.splice(index, 1)
    },
    directionDelete(index) {
      this.directionList.splice(index, 1)
    },
    modifyType(index, type) {
      if (type === 'serviceType') {
        if (index === this.serviceType) {
          this.serviceType = ''
        } else {
          this.serviceType = index
          this.courseType = ''
          this.directionList = ''
        }
      } else if (type === 'courseType') {
        if (index === this.courseType) {
          this.courseType = ''
        } else {
          this.courseType = index
          this.serviceType = ''
          this.directionList = ''
        }
      } else {
        if (index === this.directionList) {
          this.directionList = ''
        } else {
          this.courseType = ''
          this.serviceType = ''
          this.directionList = index
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    font-weight: 600;
    line-height: 46px;
  }
}
.inputBox {
  column-gap: 30px;
  p {
    width: 200px;
  }
}
.textBox {
  justify-content: space-around;
  p {
    width: 200px;
  }
}
.Promotional {
  margin-top: 24px;
  margin-bottom: 24px;
}
.list-group-item {
  background: #5eb9cd;
  width: 400px;
  height: 40px;
  color: white;
  margin: 12px 24px;
  cursor: pointer;
  display: flex;
  border-radius: 4px;
  align-items: center;
  padding: 0 12px;
  justify-content: space-between;
  input {
    width: 180px;
  }
}
.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  .col-3 {
    text-align: center;
  }
  .checked {
    margin-right: 12px;
  }
}
</style>
