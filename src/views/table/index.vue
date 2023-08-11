<template>
  <div class="row">
    <div class="col-3">
      <h3 style="margin-left: 24px">主体课程</h3>
      <draggable class="list-group" :list="list1" group="people">
        <div
          v-for="(element, index) in list1"
          :key="element.name"
          class="list-group-item"
        >
          <p v-if="type !== index">{{ element.name }} {{ index }}</p>
          <input
            v-if="type === index"
            :id="'test' + index"
            v-model="input"
            autofocus="autofocus"
            type="text"
            :placeholder="element.name"
            @blur="upData(index)"
          >
          <div>
            <el-checkbox class="checked">VIP</el-checkbox>
            <el-button
              size="mini"
              type="danger"
              @click="deleteList(index)"
            >删除</el-button>
            <el-button
              size="mini"
              type="warning"
              @click="upData(index)"
            >修改</el-button>
          </div>
        </div>
      </draggable>
      <el-button style="margin-left: 24px" type="primary">添加</el-button>
    </div>
    <div class="col-3">
      <h3 style="margin-left: 24px">综合增值服务</h3>
      <draggable class="list-group" :list="list1" group="people">
        <div
          v-for="(element, index) in list2"
          :key="element.name"
          class="list-group-item"
        >
          <p v-if="type !== index">{{ element.name }} {{ index }}</p>
          <input
            v-if="type === index"
            :id="'test' + index"
            v-model="input"
            autofocus="autofocus"
            type="text"
            :placeholder="element.name"
            @blur="upData(index)"
          >
          <div>
            <el-checkbox class="checked">VIP</el-checkbox>
            <el-button
              size="mini"
              type="danger"
              @click="deleteList(index)"
            >删除</el-button>
            <el-button
              size="mini"
              type="warning"
              @click="upData(index)"
            >修改</el-button>
          </div>
        </div>
      </draggable>
      <el-button style="margin-left: 24px" type="primary">添加</el-button>
    </div>
    <div class="col-3">
      <h3 style="margin-left: 24px">音乐艺术指导</h3>
      <draggable class="list-group" :list="list1" group="people">
        <div
          v-for="(element, index) in list2"
          :key="element.name"
          class="list-group-item"
        >
          <p v-if="type !== index">{{ element.name }} {{ index }}</p>
          <input
            v-if="type === index"
            :id="'test' + index"
            v-model="input"
            autofocus="autofocus"
            type="text"
            :placeholder="element.name"
            @blur="upData(index)"
          >
          <div>
            <el-checkbox class="checked">VIP</el-checkbox>
            <el-button
              size="mini"
              type="danger"
              @click="deleteList(index)"
            >删除</el-button>
            <el-button
              size="mini"
              type="warning"
              @click="upData(index)"
            >修改</el-button>
          </div>
        </div>
      </draggable>
      <el-button style="margin-left: 24px" type="primary">添加</el-button>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  name: 'TwoLists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 }
      ],
      list2: [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 }
      ],
      list3: [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 }
      ],
      checked: false,
      type: -1,
      input: ''
    }
  },
  methods: {
    deleteList(index) {
      this.list1.splice(index, 1)
    },
    upData(index) {
      if (index === this.type) {
        this.type = -1
      } else {
        this.type = index
      }
    }
  }
}
</script>
<style scoped lang="scss">
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
  .checked{
    margin-right: 12px;
  }
}
</style>
