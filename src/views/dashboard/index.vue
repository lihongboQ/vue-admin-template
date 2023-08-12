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
            :key="element.name"
            class="list-group-item"
          >
            <p v-if="courseType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="courseType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, 'courseType')"
            />
            <div>
              <el-checkbox class="checked">VIP</el-checkbox>
              <el-button size="mini" type="danger" @click="courseDelete(index)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'courseType')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
        <el-button type="primary">添加</el-button>
      </div>
      <div class="col-3">
        <h3 style="margin-left: 24px">综合增值服务</h3>
        <draggable class="list-group" :list="serviceList" group="people">
          <div
            v-for="(element, index) in serviceList"
            :key="element.name"
            class="list-group-item"
          >
            <p v-if="serviceType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, 'serviceType')"
            />
            <div>
              <el-checkbox class="checked">VIP</el-checkbox>
              <el-button size="mini" type="danger" @click="serviceDelete(index)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'serviceType')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
        <el-button type="primary">添加</el-button>
      </div>
      <div class="col-3">
        <h3 style="margin-left: 24px">音乐艺术指导</h3>
        <draggable class="list-group" :list="directionList" group="people">
          <div
            v-for="(element, index) in directionList"
            :key="element.name"
            class="list-group-item"
          >
            <p v-if="directionType !== index">
              {{ element.value }} {{ index }}
            </p>
            <input
              v-if="directionType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, '')"
            />
            <div>
              <el-checkbox class="checked">VIP</el-checkbox>
              <el-button
                size="mini"
                type="danger"
                @click="directionDelete(index)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, '')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
        <el-button type="primary">添加</el-button>
      </div>
    </div>
    <div class="dashboard-text">SchoolRoll</div>
    <div style="display: flex; justify-content: center" class="col-3">
      <div style="text-align: center">
        <draggable class="list-group" :list="directionList" group="people">
          <div
            v-for="(element, index) in directionList"
            :key="element.name"
            class="list-group-item"
          >
            <p v-if="directionType !== index">
              {{ element.value }} {{ index }}
            </p>
            <input
              v-if="directionType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, '')"
            />
            <div>
              <el-button
                size="mini"
                type="danger"
                @click="directionDelete(index)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, '')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
        <el-button type="primary">添加</el-button>
      </div>
    </div>
    <div>
      <div class="dashboard-text">专攻方向</div>
      <h3 style="text-align: center">现代音乐类</h3>
      <h4 style="text-align: center">热门专业</h4>
      <div class="center">
        <draggable class="list-group" :list="serviceList" group="people">
          <div
            v-for="(element, index) in serviceList"
            :key="element.name"
            class="list-group-item1"
          >
            中文：
            <p v-if="serviceType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            />
            英文：
            <p v-if="serviceType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            />
            <div>
              <el-button size="mini" type="danger" @click="serviceDelete(index)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'serviceType')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
        <el-button type="primary">添加</el-button>
        <h4 style="text-align: center">热门院校</h4>
        <div style="display: flex">
          <div class="center">
            <h5>具体院校</h5>
            <draggable class="list-group" :list="serviceList" group="people">
              <div
                v-for="(element, index) in serviceList"
                :key="element.name"
                class="list-group-item"
              >
                <p v-if="serviceType !== index">
                  {{ element.value }} {{ index }}
                </p>
                <input
                  v-if="serviceType === index"
                  :id="'test' + index"
                  v-model="element.value"
                  type="text"
                />
                <div>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="serviceDelete(index)"
                    >删除</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modifyType(index, 'serviceType')"
                    >修改</el-button
                  >
                </div>
              </div>
            </draggable>
            <el-button type="primary">添加</el-button>
          </div>
          <div class="center">
            <h5>地区</h5>
            <draggable class="list-group" :list="serviceList" group="people">
              <div
                v-for="(element, index) in serviceList"
                :key="element.name"
                class="list-group-item"
              >
                <p v-if="serviceType !== index">
                  {{ element.value }} {{ index }}
                </p>
                <input
                  v-if="serviceType === index"
                  :id="'test' + index"
                  v-model="element.value"
                  type="text"
                />
                <div>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="serviceDelete(index)"
                    >删除</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modifyType(index, 'serviceType')"
                    >修改</el-button
                  >
                </div>
              </div>
            </draggable>
            <el-button type="primary">添加</el-button>
          </div>
        </div>
      </div>
      <h3 style="text-align: center">古典音乐类</h3>
      <h4 style="text-align: center">热门专业</h4>
      <div class="center">
        <draggable class="list-group" :list="serviceList" group="people">
          <div
            v-for="(element, index) in serviceList"
            :key="element.name"
            class="list-group-item1"
          >
            中文：
            <p v-if="serviceType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            />
            英文：
            <p v-if="serviceType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            />
            <div>
              <el-button size="mini" type="danger" @click="serviceDelete(index)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'serviceType')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
        <el-button type="primary">添加</el-button>
        <h4 style="text-align: center">热门院校</h4>
        <div style="display: flex">
          <div class="center">
            <h5>具体院校</h5>
            <draggable class="list-group" :list="serviceList" group="people">
              <div
                v-for="(element, index) in serviceList"
                :key="element.name"
                class="list-group-item"
              >
                <p v-if="serviceType !== index">
                  {{ element.value }} {{ index }}
                </p>
                <input
                  v-if="serviceType === index"
                  :id="'test' + index"
                  v-model="element.value"
                  type="text"
                />
                <div>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="serviceDelete(index)"
                    >删除</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modifyType(index, 'serviceType')"
                    >修改</el-button
                  >
                </div>
              </div>
            </draggable>
            <el-button type="primary">添加</el-button>
          </div>
          <div class="center">
            <h5>地区</h5>
            <draggable class="list-group" :list="serviceList" group="people">
              <div
                v-for="(element, index) in serviceList"
                :key="element.name"
                class="list-group-item"
              >
                <p v-if="serviceType !== index">
                  {{ element.value }} {{ index }}
                </p>
                <input
                  v-if="serviceType === index"
                  :id="'test' + index"
                  v-model="element.value"
                  type="text"
                />
                <div>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="serviceDelete(index)"
                    >删除</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modifyType(index, 'serviceType')"
                    >修改</el-button
                  >
                </div>
              </div>
            </draggable>
            <el-button type="primary">添加</el-button>
          </div>
        </div>
      </div>
      <h3 style="text-align: center">音乐理论及应用类</h3>
      <h4 style="text-align: center">热门专业</h4>
      <div class="center">
        <draggable class="list-group" :list="serviceList" group="people">
          <div
            v-for="(element, index) in serviceList"
            :key="element.name"
            class="list-group-item1"
          >
            中文：
            <p v-if="serviceType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            />
            英文：
            <p v-if="serviceType !== index">{{ element.value }} {{ index }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
            />
            <div>
              <el-button size="mini" type="danger" @click="serviceDelete(index)"
                >删除</el-button
              >
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, 'serviceType')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
        <el-button type="primary">添加</el-button>
        <h4 style="text-align: center">热门院校</h4>
        <div style="display: flex">
          <div class="center">
            <h5>具体院校</h5>
            <draggable class="list-group" :list="serviceList" group="people">
              <div
                v-for="(element, index) in serviceList"
                :key="element.name"
                class="list-group-item"
              >
                <p v-if="serviceType !== index">
                  {{ element.value }} {{ index }}
                </p>
                <input
                  v-if="serviceType === index"
                  :id="'test' + index"
                  v-model="element.value"
                  type="text"
                />
                <div>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="serviceDelete(index)"
                    >删除</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modifyType(index, 'serviceType')"
                    >修改</el-button
                  >
                </div>
              </div>
            </draggable>
            <el-button type="primary">添加</el-button>
          </div>
          <div class="center">
            <h5>地区</h5>
            <draggable class="list-group" :list="serviceList" group="people">
              <div
                v-for="(element, index) in serviceList"
                :key="element.name"
                class="list-group-item"
              >
                <p v-if="serviceType !== index">
                  {{ element.value }} {{ index }}
                </p>
                <input
                  v-if="serviceType === index"
                  :id="'test' + index"
                  v-model="element.value"
                  type="text"
                />
                <div>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="serviceDelete(index)"
                    >删除</el-button
                  >
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modifyType(index, 'serviceType')"
                    >修改</el-button
                  >
                </div>
              </div>
            </draggable>
            <el-button type="primary">添加</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-text">师资团队介绍</div>
    <div style="display: flex; justify-content: center" class="col-3">
      <div style="text-align: center">
        <draggable class="list-group" :list="directionList" group="people">
          <div
            v-for="(element, index) in directionList"
            :key="element.name"
            class="list-group-item"
          >
            <p v-if="directionType !== index">
              {{ element.value }} {{ index }}
            </p>
            <input
              v-if="directionType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, '')"
            />
            <div>
              <el-button
                size="mini"
                type="warning"
                @click="modifyType(index, '')"
                >修改</el-button
              >
            </div>
          </div>
        </draggable>
      </div>
    </div>
    <div>
      <div class="dashboard-text">公司特色</div>
      <div style="margin-top: 16px">
        资深导师团队:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        独家顶级设备配置:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        高质量高效率精致教学:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        产学结合&背景提升:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
    </div>
    <div style="margin-top: 16px">
      <div class="dashboard-text">关于我们</div>
      <div style="margin-top: 16px">
        资深导师团队:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        独家顶级设备配置:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
    </div>
    <div style="margin-top: 16px">
      <div class="dashboard-text">底部标语</div>
      <div style="margin-top: 16px">
        中文:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        英文:<el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
    </div>
    <div style="margin-top: 16px">
      <div class="dashboard-text">手机号</div>
      <div style="margin-top: 16px">
        <el-input
          v-model="slogan[0]"
          style="margin-top: 16px"
          placeholder="请输入内容"
        />
      </div>
    </div>
    <div style="width: 100%; margin-top: 16px; text-align: center">
      <el-button size="medium" type="primary">保存</el-button>
    </div>
  </div>
</template>
<script>
import { getCompanyInfo } from "@/api/company";
import draggable from "vuedraggable";
export default {
  name: "Dashboard",
  components: {
    draggable,
  },
  data() {
    return {
      slogan: [
        "十万象限 是杭州首家拥有 十年音乐传媒行业经验的专业团队 由世界艺术名校海归艺术家导师及 独立音乐人联合创立",
        "音乐艺术作品集教育 留学申请规划 以及 跨界艺术联动",
        "以专业的教学专注的态度帮助每一位热爱音乐的学生拿到dream offer 开发艺术领域的无限可能性",
      ],
      courseList: [
        { value: "John", vip: false },
        { value: "Joao", vip: false },
        { value: "Jean", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
        { value: "Gerard", vip: false },
      ],
      modernMusicHotMajor: [
        {
          chinese: "",
          english: "",
        },
      ],
      schoolRoll: [
        "纽约大学史丹赫音乐学院",
        "英国皇家音乐学院",
        "音乐科技",
        "多媒体视觉配乐",
        "约翰霍普金斯大学皮博迪音乐学院",
        "东京艺术大学",
        "钢琴表演",
        "声音设计",
        "朱莉亚音乐学院",
        "柏林艺术大学",
        "电子音乐制作",
        "庆熙大学",
        "米兰威尔第音乐学院",
        "歌剧声乐",
        "古典器乐演奏",
        "爱丁堡大学",
      ],
      serviceList: [
        { value: "Juan", vip: false },
        { value: "Edgard", vip: false },
        { value: "Johnson", vip: false },
      ],
      directionList: [
        { value: "Juan", vip: false },
        { value: "Edgard", vip: false },
        { value: "Johnson", vip: false },
      ],
      dataFrom: {},
      worksAddress: "",
      worksName: "",
      checked: false,
      courseType: "",
      serviceType: "",
      directionType: "",
      // input: ''
    };
  },
  mounted() {
    this.getCompanyInfos();
  },
  methods: {
    courseDelete(index) {
      this.courseList.splice(index, 1);
    },
    serviceDelete(index) {
      this.serviceList.splice(index, 1);
    },
    directionDelete(index) {
      this.directionList.splice(index, 1);
    },
    modifyType(index, type) {
      if (type === "serviceType") {
        if (index === this.serviceType) {
          this.serviceType = "";
        } else {
          this.serviceType = index;
          this.courseType = "";
          this.directionType = "";
        }
      } else if (type === "courseType") {
        if (index === this.courseType) {
          this.courseType = "";
        } else {
          this.courseType = index;
          this.serviceType = "";
          this.directionType = "";
        }
      } else {
        if (index === this.directionType) {
          this.directionType = "";
        } else {
          this.courseType = "";
          this.serviceType = "";
          this.directionType = index;
        }
      }
    },
    getCompanyInfos() {
      getCompanyInfo().then((res) => {
        console.log(res);
      });
    },
  },
};
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
.center {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  width: 500px;
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
    width: 280px;
  }
}
.list-group-item1 {
  background: #5eb9cd;
  width: 800px;
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
    width: 200px;
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
  .schoolRoll {
    width: 100%;
    text-align: left;
    p {
      width: 350px;
    }
  }
  .schoolRol:deep(input) {
    width: 350px;
  }
  .checked {
    margin-right: 12px;
  }
}
</style>
