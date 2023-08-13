<template>
  <div class="dashboard-container">
    <div class="dashboard-text">slogan</div>
    <div style="width: 100%" class="flex inputBox">
      <div style="flex-direction: column; text-align: center; width: 30%;">
        <el-input v-for="(item ,index) in slogan.slogan1" :key="index+'slogan.slogan1'" v-model="slogan.slogan1[index]" style="margin-top: 16px" placeholder="请输入内容" />
        <div style="margin-top: 16px">
          <el-button type="primary" style="margin-right;: 16px" @click="sloganAdd('1')">添加</el-button>
          <el-button s type="danger" @click="sloganDelete('1')">添加</el-button>
        </div>
      </div>
      <div style="flex-direction: column; text-align: center; width: 30%;">
        <el-input v-for="(item ,index) in slogan.slogan2" :key="index+'slogan.slogan2'" v-model="slogan.slogan2[index]" style="margin-top: 16px" placeholder="请输入内容" />
        <div style="margin-top: 16px">
          <el-button type="primary" style="margin-right;: 16px" @click="sloganAdd('2')">添加</el-button>
          <el-button s type="danger" @click="sloganDelete('2')">添加</el-button>
        </div>
      </div>
      <div style="flex-direction: column; text-align: center; width: 30%;">
        <el-input v-for="(item ,index) in slogan.slogan3" :key="index+'slogan.slogan3'" v-model="slogan.slogan3[index]" style="margin-top: 16px" placeholder="请输入内容" />
        <div style="margin-top: 16px">
          <el-button type="primary" style="margin-right;: 16px" @click="sloganAdd('3')">添加</el-button>
          <el-button s type="danger" @click="sloganDelete('3')">添加</el-button>
        </div>
      </div>
    </div>
    <div class="dashboard-text Promotional">宣传作品名称</div>
    <el-input v-model="promotionalTitle" placeholder="请输入内容" />
    <div class="dashboard-text Promotional">宣传作品地址</div>
    <el-input v-model="promotionalUrl" placeholder="请输入内容" />
    <div class="dashboard-text Promotional">产品体系</div>
    <div class="row">
      <div class="col-3">
        <h3 style="margin-left: 24px">主体课程</h3>
        <draggable class="list-group" :list="productSystem.courseList" group="people">
          <div v-for="(element, index) in productSystem.courseList" :key="element.name" class="list-group-item">
            <p v-if="courseType !== index">{{ element.value }}</p>
            <input
              v-if="courseType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, 'courseType')"
            >
            <div>
              <el-checkbox v-model="element.vip" class="checked">VIP</el-checkbox>
              <el-button size="mini" type="danger" @click="courseDelete(index)">删除</el-button>
              <el-button size="mini" type="warning" @click="modifyType(index, 'courseType')">修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button type="primary" @click="courseAdd">添加</el-button>
      </div>
      <div class="col-3">
        <h3 style="margin-left: 24px">综合增值服务</h3>
        <draggable class="list-group" :list="productSystem.serviceList" group="people">
          <div v-for="(element, index) in productSystem.serviceList" :key="element.name" class="list-group-item">
            <p v-if="serviceType !== index">{{ element.value }}</p>
            <input
              v-if="serviceType === index"
              :id="'test' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, 'serviceType')"
            >
            <div>
              <el-checkbox v-model="element.vip" class="checked">VIP</el-checkbox>
              <el-button size="mini" type="danger" @click="serviceDelete(index)">删除</el-button>
              <el-button size="mini" type="warning" @click="modifyType(index, 'serviceType')">修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button type="primary" @click="serviceAdd">添加</el-button>
      </div>
      <div class="col-3">
        <h3 style="margin-left: 24px">音乐艺术指导</h3>
        <draggable class="list-group" :list="productSystem.directionList" group="people">
          <div v-for="(element, index) in productSystem.directionList" :key="element.name" class="list-group-item">
            <p v-if="directionType !== index">
              {{ element.value }}
            </p>
            <input
              v-if="directionType === index"
              :id="'testdire11ctionType' + index"
              v-model="element.value"
              type="text"
              @blur="modifyType(index, 'directionType')"
            >
            <div>
              <el-checkbox v-model="element.vip" class="checked">VIP</el-checkbox>
              <el-button size="mini" type="danger" @click="directionDelete(index)">删除</el-button>
              <el-button size="mini" type="warning" @click="modifyType(index, 'directionType')">修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button type="primary" @click="directionAdd">添加</el-button>
      </div>
    </div>
    <div class="dashboard-text">SchoolRoll</div>
    <div style="display: flex; justify-content: center" class="col-3">
      <div style="text-align: center">
        <draggable class="list-group" :list="marqueeContent" group="people">
          <div v-for="(element, index) in marqueeContent" :key="index" class="list-group-item">
            <p v-if="marqueeContentType !== index">{{ element.school }}</p>
            <input
              v-if="marqueeContentType === index"
              :id="'marqueeContentType' + index"
              v-model="element.school"
              type="text"
              @blur="marqueeContentModifyType(index)"
            >
            <div>
              <el-checkbox v-model="element.vip" style="margin-right: 10px" class="checked">点亮</el-checkbox>
              <el-button size="mini" type="danger" @click="marqueeContentDelete(index)">删除</el-button>
              <el-button size="mini" type="warning" @click="marqueeContentModifyType(index)">修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button type="primary" @click="marqueeContentAdd">添加</el-button>
      </div>
    </div>
    <div>
      <div class="dashboard-text">专攻方向</div>
      <h3 style="text-align: center">现代音乐类</h3>
      <h4 style="text-align: center">热门专业</h4>
      <div class="center">
        <draggable class="list-group" group="people">
          <div
            v-for="(element, index) in popularMajors.modernMusic
              .popularMajorsCn"
            :key="index"
            class="list-group-item1"
          >
            中文：
            <p v-if="popularMajorsType !== index">{{ element }}</p>
            <input
              v-if="popularMajorsType === index"
              :id="'test' + index"
              v-model="popularMajors.modernMusic.popularMajorsCn[index]"
              type="text"
            >
            英文：
            <p v-if="popularMajorsType !== index">
              {{ popularMajors.modernMusic.popularMajorsEn[index] }}
            </p>
            <input
              v-if="popularMajorsType === index"
              :id="'testEn' + index"
              v-model="popularMajors.modernMusic.popularMajorsEn[index]"
              type="text"
            >
            <div>
              <el-button size="mini" type="danger" @click="popularMajorsDelete(index)">删除</el-button>
              <el-button size="mini" type="warning" @click="popularMajorsModifyType(index)">修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button type="primary" @click="popularMajorsAdd">添加</el-button>
        <h4 style="text-align: center">热门院校</h4>
        <div style="display: flex">
          <div class="center">
            <h5>具体院校</h5>
            <draggable class="list-group" :list="popularColleges.modernMusic.specificColleges" group="people">
              <div
                v-for="(element, index) in popularColleges.modernMusic
                  .specificColleges"
                :key="index"
                class="list-group-item"
              >
                <p v-if="modernMusicCollegesType !== index">
                  {{ element }}
                </p>
                <input
                  v-if="modernMusicCollegesType === index"
                  :id="'test' + index"
                  v-model="popularColleges.modernMusic.specificColleges[index]"
                  type="text"
                >
                <div>
                  <el-button size="mini" type="danger" @click="modernMusicCollegesDelete(index)">删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modernMusicCollegesModifyType(index, 'serviceType')"
                  >修改</el-button>
                </div>
              </div>
            </draggable>
            <el-button type="primary" @click="modernMusicCollegesAdd">添加</el-button>
          </div>
          <div class="center">
            <h5>地区</h5>
            <draggable class="list-group" :list="popularColleges.modernMusic.area" group="people">
              <div v-for="(element, index) in popularColleges.modernMusic.area" :key="index" class="list-group-item">
                <p v-if="modernMusicAreaType !== index">
                  {{ element }}
                </p>
                <input
                  v-if="modernMusicAreaType === index"
                  :id="'test' + index"
                  v-model="popularColleges.modernMusic.area[index]"
                  type="text"
                >
                <div>
                  <el-button size="mini" type="danger" @click="modernMusicAreaDelete(index)">删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="modernMusicAreaModifyType(index, 'serviceType')"
                  >修改</el-button>
                </div>
              </div>
            </draggable>
            <el-button type="primary" @click="modernMusicAreaAdd">添加</el-button>
          </div>
        </div>
      </div>
      <h3 style="text-align: center">古典音乐类</h3>
      <h4 style="text-align: center">热门专业</h4>
      <div class="center">
        <draggable class="list-group" group="people">
          <div
            v-for="(element, index) in popularMajors.classicalMusic
              .popularMajorsCn"
            :key="index"
            class="list-group-item1"
          >
            中文：
            <p v-if="classicalMusicType !== index">{{ element }}</p>
            <input
              v-if="classicalMusicType === index"
              :id="'test' + index"
              v-model="popularMajors.classicalMusic.popularMajorsCn[index]"
              type="text"
            >
            英文：
            <p v-if="classicalMusicType !== index">
              {{ popularMajors.classicalMusic.popularMajorsEn[index] }}
            </p>
            <input
              v-if="classicalMusicType === index"
              :id="'testEn' + index"
              v-model="popularMajors.classicalMusic.popularMajorsEn[index]"
              type="text"
            >
            <div>
              <el-button size="mini" type="danger" @click="classicalMusicDelete(index)">删除</el-button>
              <el-button size="mini" type="warning" @click="classicalMusicModifyType(index)">修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button type="primary" @click="classicalMusicAdd">添加</el-button>
        <h4 style="text-align: center">热门院校</h4>
        <div style="display: flex">
          <div class="center">
            <h5>具体院校</h5>
            <draggable class="list-group" :list="popularColleges.classicalMusic.specificColleges" group="people">
              <div
                v-for="(element, index) in popularColleges.classicalMusic
                  .specificColleges"
                :key="index"
                class="list-group-item"
              >
                <p v-if="classicalMusicCollegesType !== index">
                  {{ element }}
                </p>
                <input
                  v-if="classicalMusicCollegesType === index"
                  :id="'test' + index"
                  v-model="popularColleges.classicalMusic.specificColleges[index]
                  "
                  type="text"
                >
                <div>
                  <el-button size="mini" type="danger" @click="classicalMusicCollegesDelete(index)">删除</el-button>
                  <el-button size="mini" type="warning" @click="classicalMusicCollegesModifyType(index)">修改</el-button>
                </div>
              </div>
            </draggable>
            <el-button type="primary" @click="classicalMusicCollegesAdd">添加</el-button>
          </div>
          <div class="center">
            <h5>地区</h5>
            <draggable class="list-group" :list="popularColleges.classicalMusic.area" group="people">
              <div v-for="(element, index) in popularColleges.classicalMusic.area" :key="index" class="list-group-item">
                <p v-if="classicalMusicAreaType !== index">
                  {{ element }}
                </p>
                <input
                  v-if="classicalMusicAreaType === index"
                  :id="'test' + index"
                  v-model="popularColleges.classicalMusic.area[index]"
                  type="text"
                >
                <div>
                  <el-button size="mini" type="danger" @click="classicalMusicAreaDelete(index)">删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="classicalMusicAreaModifyType(index, 'serviceType')"
                  >修改</el-button>
                </div>
              </div>
            </draggable>
            <el-button type="primary" @click="classicalMusicAreaAdd">添加</el-button>
          </div>
        </div>
      </div>
      <h3 style="text-align: center">音乐理论及应用类</h3>
      <h4 style="text-align: center">热门专业</h4>
      <div class="center">
        <draggable class="list-group" group="people">
          <div
            v-for="(element, index) in popularMajors.musicTheory
              .popularMajorsCn"
            :key="index"
            class="list-group-item1"
          >
            中文：
            <p v-if="musicTheoryType !== index">{{ element }}</p>
            <input
              v-if="musicTheoryType === index"
              :id="'test' + index"
              v-model="popularMajors.musicTheory.popularMajorsCn[index]"
              type="text"
            >
            英文：
            <p v-if="musicTheoryType !== index">
              {{ popularMajors.musicTheory.popularMajorsEn[index] }}
            </p>
            <input
              v-if="musicTheoryType === index"
              :id="'testEn' + index"
              v-model="popularMajors.musicTheory.popularMajorsEn[index]"
              type="text"
            >
            <div>
              <el-button size="mini" type="danger" @click="musicTheoryDelete(index)">删除</el-button>
              <el-button size="mini" type="warning" @click="musicTheoryModifyType(index)">修改</el-button>
            </div>
          </div>
        </draggable>
        <el-button type="primary" @click="musicTheoryAdd">添加</el-button>
        <h4 style="text-align: center">热门院校</h4>
        <div style="display: flex">
          <div class="center">
            <h5>具体院校</h5>
            <draggable class="list-group" :list="popularColleges.musicTheory.specificColleges" group="people">
              <div
                v-for="(element, index) in popularColleges.musicTheory
                  .specificColleges"
                :key="index"
                class="list-group-item"
              >
                <p v-if="musicTheoryCollegesType !== index">
                  {{ element }}
                </p>
                <input
                  v-if="musicTheoryCollegesType === index"
                  :id="'test' + index"
                  v-model="popularColleges.musicTheory.specificColleges[index]"
                  type="text"
                >
                <div>
                  <el-button size="mini" type="danger" @click="musicTheoryCollegesDelete(index)">删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="musicTheoryCollegesModifyType(index, 'serviceType')"
                  >修改</el-button>
                </div>
              </div>
            </draggable>
            <el-button type="primary" @click="musicTheoryCollegesAdd">添加</el-button>
          </div>
          <div class="center">
            <h5>地区</h5>
            <draggable class="list-group" :list="popularColleges.musicTheory.area" group="people">
              <div v-for="(element, index) in popularColleges.musicTheory.area" :key="index" class="list-group-item">
                <p v-if="musicTheoryAreaType !== index">
                  {{ element }}
                </p>
                <input
                  v-if="musicTheoryAreaType === index"
                  :id="'test' + index"
                  v-model="popularColleges.musicTheory.area[index]"
                  type="text"
                >
                <div>
                  <el-button size="mini" type="danger" @click="musicTheoryAreaDelete(index)">删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="musicTheoryAreaModifyType(index, 'serviceType')"
                  >修改</el-button>
                </div>
              </div>
            </draggable>
            <el-button type="primary" @click="musicTheoryAreaAdd">添加</el-button>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-bottom: 16px" class="dashboard-text">师资团队介绍</div>
    一线导师：<el-input v-model="firstLineTutor" style="margin: 16px 0px" placeholder="请输入内容" />
    兼职音乐导师：<el-input v-model="partTimeMusicTutor" style="margin: 16px 0px" placeholder="请输入内容" />
    资深留学规划师：<el-input v-model="seniorStudyAbroadPlanner" style="margin: 16px 0px" placeholder="请输入内容" />
    <div>
      <div style="margin-top: 32px" class="dashboard-text">公司特色</div>
      <div style="margin-top: 16px">
        资深导师团队:<el-input
          v-model="features.seniorTutor"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        独家顶级设备配置:<el-input
          v-model="features.configuration"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        高质量高效率精致教学:<el-input
          v-model="features.exquisiteTeaching"
          style="margin-top: 16px"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
        />
      </div>
      <div style="margin-top: 16px">
        产学结合&背景提升:<el-input
          v-model="features.backgroundEnhancement"
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
        关于我们:<el-input v-model="aboutUs.aboutUs" style="margin-top: 16px" type="textarea" :rows="3" placeholder="请输入内容" />
      </div>
      <div style="margin-top: 16px">
        发展历程:<el-input
          v-model="aboutUs.developmentHistory"
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
        中文:<el-input v-model="footerSloganCn" style="margin-top: 16px" type="textarea" :rows="3" placeholder="请输入内容" />
      </div>
      <div style="margin-top: 16px">
        英文:<el-input v-model="footerSloganEn" style="margin-top: 16px" type="textarea" :rows="3" placeholder="请输入内容" />
      </div>
    </div>
    <div style="margin-top: 16px">
      <div class="dashboard-text">手机号</div>
      <div style="margin-top: 16px">
        <el-input v-model="phone" style="margin-top: 16px" placeholder="请输入内容" />
      </div>
    </div>
    <div style="margin-top: 16px">
      <div class="dashboard-text">邮箱</div>
      <div style="margin-top: 16px">
        <el-input v-model="email" style="margin-top: 16px" placeholder="请输入内容" />
      </div>
      <div style="margin-top: 16px">
        <div class="dashboard-text">地址</div>
        <div style="margin-top: 16px">
          <el-input v-model="address" style="margin-top: 16px" placeholder="请输入内容" />
        </div>
      </div>
      <div style="width: 100%; margin-top: 16px; text-align: center">
        <el-button size="medium" type="primary" @click="setUpdateCompanyInfo">保存</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getCompanyInfo, updateCompanyInfo } from '@/api/company'
import draggable from 'vuedraggable'
export default {
  name: 'Dashboard',
  components: {
    draggable
  },
  data() {
    return {
      slogan: {
        slogan1: [],
        slogan2: [],
        slogan3: []
      },
      productSystem: {
        courseList: [],
        serviceList: [],
        directionList: []
      },
      marqueeContentType: '',
      marqueeContent: [],
      popularMajors: {
        modernMusic: {
          popularMajorsCn: [],
          popularMajorsEn: []
        },
        classicalMusic: {
          popularMajorsCn: [],
          popularMajorsEn: []
        },
        musicTheory: {
          popularMajorsCn: [],
          popularMajorsEn: []
        }
      },
      popularColleges: {
        modernMusic: {
          specificColleges: [],
          area: []
        },
        classicalMusic: {
          specificColleges: [],
          area: []
        },
        musicTheory: {
          specificColleges: [],
          area: []
        }
      },
      firstLineTutor: '',
      partTimeMusicTutor: '',
      seniorStudyAbroadPlanner: '',
      features: {
        seniorTutor: '',
        configuration: '',
        exquisiteTeaching: '',
        backgroundEnhancement: ''
      },
      email: '',
      dataFrom: {
        aboutUs: '',
        address: '',
        email: '',
        features: '',
        firstLineTutor: '',
        footerSloganCn: '',
        footerSloganEn: '',
        marqueeContent: '',
        partTimeMusicTutor: '',
        phone: '',
        id: '1',
        popularColleges: '',
        popularMajorsCn: '',
        popularMajorsEn: '',
        productSystem: '',
        promotionalTitle: '',
        promotionalUrl: '',
        seniorStudyAbroadPlanner: '',
        slogan: ''
      },
      aboutUs: {
        aboutUs: '',
        developmentHistory: ''
      },
      footerSloganCn: '',
      footerSloganEn: '',
      phone: '',
      promotionalTitle: '',
      promotionalUrl: '',
      address: '',
      popularMajorsType: '',
      classicalMusicType: '',
      musicTheoryType: '',
      modernMusicCollegesType: '',
      classicalMusicCollegesType: '',
      musicTheoryCollegesType: '',
      modernMusicAreaType: '',
      classicalMusicAreaType: '',
      musicTheoryAreaType: '',
      courseType: '',
      serviceType: '',
      directionType: ''
    }
  },
  mounted() {
    this.getCompanyInfos()
  },
  methods: {
    courseAdd() {
      this.productSystem.courseList.push({ value: '', vip: false })
    },
    serviceAdd() {
      this.productSystem.serviceList.push({ value: '', vip: false })
    },
    directionAdd() {
      this.productSystem.directionList.push({ value: '', vip: false })
    },
    marqueeContentAdd() {
      this.marqueeContent.push({ school: '', vip: false })
    },
    popularMajorsAdd() {
      this.popularMajors.modernMusic.popularMajorsCn.push('')
      this.popularMajors.modernMusic.popularMajorsEn.push('')
    },
    classicalMusicAdd() {
      this.popularMajors.classicalMusic.popularMajorsCn.push('')
      this.popularMajors.classicalMusic.popularMajorsEn.push('')
    },
    musicTheoryAdd() {
      this.popularMajors.musicTheory.popularMajorsCn.push('')
      this.popularMajors.musicTheory.popularMajorsEn.push('')
    },
    courseDelete(index) {
      this.productSystem.courseList.splice(index, 1)
    },
    serviceDelete(index) {
      this.productSystem.serviceList.splice(index, 1)
    },
    productSystemDelete(index) {
      this.productSystem.serviceList.splice(index, 1)
    },
    directionDelete(index) {
      this.productSystem.directionList.splice(index, 1)
    },
    classicalMusicDelete(index) {
      this.popularMajors.classicalMusic.popularMajorsEn.splice(index, 1)
      this.popularMajors.classicalMusic.popularMajorsCn.splice(index, 1)
    },
    popularMajorsDelete(index) {
      this.popularMajors.modernMusic.popularMajorsEn.splice(index, 1)
      this.popularMajors.modernMusic.popularMajorsCn.splice(index, 1)
    },
    musicTheoryDelete(index) {
      this.popularMajors.musicTheory.popularMajorsEn.splice(index, 1)
      this.popularMajors.musicTheory.popularMajorsCn.splice(index, 1)
    },
    marqueeContentDelete(index) {
      this.marqueeContent.splice(index, 1)
    },
    modifyType(index, type) {
      if (type === 'serviceType') {
        if (index === this.serviceType) {
          this.serviceType = ''
        } else {
          this.serviceType = index
          this.courseType = ''
          this.directionType = ''
        }
      } else if (type === 'courseType') {
        if (index === this.courseType) {
          this.courseType = ''
        } else {
          this.courseType = index
          this.serviceType = ''
          this.directionType = ''
        }
      } else if (type === 'directionType') {
        if (index === this.directionType) {
          this.directionType = ''
        } else {
          this.courseType = ''
          this.serviceType = ''
          this.directionType = index
        }
      }
    },
    marqueeContentModifyType(index) {
      if (this.marqueeContentType === index) {
        this.marqueeContentType = ''
      } else {
        this.marqueeContentType = index
      }
    },
    popularMajorsModifyType(index) {
      if (this.popularMajorsType === index) {
        this.popularMajorsType = ''
      } else {
        this.popularMajorsType = index
      }
    },
    musicTheoryModifyType(index) {
      if (this.musicTheoryType === index) {
        this.musicTheoryType = ''
      } else {
        this.musicTheoryType = index
      }
    },
    classicalMusicModifyType(index) {
      if (this.classicalMusicType === index) {
        this.classicalMusicType = ''
      } else {
        this.classicalMusicType = index
      }
    },
    //
    //
    modernMusicCollegesDelete(index) {
      this.popularColleges.modernMusic.specificColleges.splice(index, 1)
    },
    modernMusicCollegesModifyType(index) {
      if (this.modernMusicCollegesType === index) {
        this.modernMusicCollegesType = ''
      } else {
        this.modernMusicCollegesType = index
      }
    },
    modernMusicCollegesAdd() {
      this.popularColleges.modernMusic.specificColleges.push('')
    },
    modernMusicAreaDelete(index) {
      this.popularColleges.modernMusic.area.splice(index, 1)
    },
    modernMusicAreaModifyType(index) {
      if (this.modernMusicAreaType === index) {
        this.modernMusicAreaType = ''
      } else {
        this.modernMusicAreaType = index
      }
    },
    modernMusicAreaAdd() {
      this.popularColleges.modernMusic.area.push('')
    },

    classicalMusicCollegesDelete(index) {
      this.popularColleges.classicalMusic.specificColleges.splice(index, 1)
    },
    classicalMusicCollegesModifyType(index) {
      if (this.classicalMusicCollegesType === index) {
        this.classicalMusicCollegesType = ''
      } else {
        this.classicalMusicCollegesType = index
      }
    },
    classicalMusicCollegesAdd() {
      this.popularColleges.classicalMusic.specificColleges.push('')
    },

    musicTheoryCollegesDelete(index) {
      this.popularColleges.musicTheory.specificColleges.splice(index, 1)
    },
    musicTheoryCollegesModifyType(index) {
      if (this.musicTheoryCollegesType === index) {
        this.musicTheoryCollegesType = ''
      } else {
        this.musicTheoryCollegesType = index
      }
    },
    sloganAdd(index) {
      if (index === '1') {
        this.slogan.slogan1.push('')
      }
      if (index === '2') {
        this.slogan.slogan2.push('')
      }
      if (index === '3') {
        this.slogan.slogan3.push('')
      }
    },
    sloganDelete(index) {
      if (index === '1') {
        this.slogan.slogan1.pop()
      }
      if (index === '2') {
        this.slogan.slogan2.pop()
      }
      if (index === '3') {
        this.slogan.slogan3.pop()
      }
    },
    musicTheoryCollegesAdd() {
      this.popularColleges.musicTheory.specificColleges.push('')
    },

    classicalMusicAreaDelete(index) {
      this.popularColleges.classicalMusic.area.splice(index, 1)
    },
    classicalMusicAreaModifyType(index) {
      if (this.classicalMusicAreaType === index) {
        this.classicalMusicAreaType = ''
      } else {
        this.classicalMusicAreaType = index
      }
    },
    classicalMusicAreaAdd() {
      this.popularColleges.classicalMusic.area.push('')
    },
    musicTheoryAreaDelete(index) {
      this.popularColleges.musicTheory.area.splice(index, 1)
    },
    musicTheoryAreaModifyType(index) {
      if (this.musicTheoryAreaType === index) {
        this.musicTheoryAreaType = ''
      } else {
        this.musicTheoryAreaType = index
      }
    },
    musicTheoryAreaAdd() {
      this.popularColleges.musicTheory.area.push('')
    },
    getCompanyInfos() {
      getCompanyInfo()
        .then((res) => {
          if (res.code === 200) {
            this.aboutUs = JSON.parse(res.data.aboutUs)
            this.address = res.data.address
            this.email = res.data.email
            this.features = JSON.parse(res.data.features)
            this.firstLineTutor = res.data.firstLineTutor
            this.footerSloganCn = res.data.footerSloganCn
            this.footerSloganEn = res.data.footerSloganEn
            this.marqueeContent = JSON.parse(res.data.marqueeContent)
            this.partTimeMusicTutor = res.data.partTimeMusicTutor
            this.phone = res.data.phone
            this.popularColleges = JSON.parse(res.data.popularColleges)
            this.productSystem = JSON.parse(res.data.productSystem)
            this.promotionalTitle = res.data.promotionalTitle
            this.promotionalUrl = res.data.promotionalUrl
            this.seniorStudyAbroadPlanner = res.data.seniorStudyAbroadPlanner
            this.slogan = JSON.parse(res.data.slogan)
            this.popularMajors.modernMusic.popularMajorsCn = JSON.parse(
              res.data.popularMajorsCn
            ).modernMusic
            this.popularMajors.classicalMusic.popularMajorsCn = JSON.parse(
              res.data.popularMajorsCn
            ).classicalMusic
            this.popularMajors.musicTheory.popularMajorsCn = JSON.parse(
              res.data.popularMajorsCn
            ).musicTheory
            this.popularMajors.modernMusic.popularMajorsEn = JSON.parse(
              res.data.popularMajorsEn
            ).modernMusic
            this.popularMajors.classicalMusic.popularMajorsEn = JSON.parse(
              res.data.popularMajorsEn
            ).classicalMusic
            this.popularMajors.musicTheory.popularMajorsEn = JSON.parse(
              res.data.popularMajorsEn
            ).musicTheory
          } else {
            this.$message.error(res.msg)
          }
        })
        .catch(() => {
          this.$message.error('网络错误')
        })
    },
    setUpdateCompanyInfo() {
      this.dataFrom.aboutUs = JSON.stringify(this.aboutUs)
      this.dataFrom.address = this.address
      this.dataFrom.email = this.email
      this.dataFrom.features = JSON.stringify(this.features)
      this.dataFrom.firstLineTutor = this.firstLineTutor
      this.dataFrom.footerSloganCn = this.footerSloganCn
      this.dataFrom.footerSloganEn = this.footerSloganEn
      this.dataFrom.marqueeContent = JSON.stringify(this.marqueeContent)
      this.dataFrom.partTimeMusicTutor = this.partTimeMusicTutor
      this.dataFrom.phone = this.phone
      this.dataFrom.popularColleges = JSON.stringify(this.popularColleges)
      this.dataFrom.popularMajorsCn = JSON.stringify({
        modernMusic: this.popularMajors.modernMusic.popularMajorsCn,
        classicalMusic: this.popularMajors.classicalMusic.popularMajorsCn,
        musicTheory: this.popularMajors.musicTheory.popularMajorsCn
      })
      this.dataFrom.popularMajorsEn = JSON.stringify({
        modernMusic: this.popularMajors.modernMusic.popularMajorsEn,
        classicalMusic: this.popularMajors.classicalMusic.popularMajorsEn,
        musicTheory: this.popularMajors.musicTheory.popularMajorsEn
      })
      this.dataFrom.productSystem = JSON.stringify(this.productSystem)
      this.dataFrom.promotionalTitle = this.promotionalTitle
      this.dataFrom.promotionalUrl = this.promotionalUrl
      this.dataFrom.seniorStudyAbroadPlanner = this.seniorStudyAbroadPlanner
      this.dataFrom.slogan = JSON.stringify(this.slogan)
      updateCompanyInfo(this.dataFrom)
        .then(() => { })
        .catch(() => {
          this.$message.error('网络错误')
        })
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

/* .inputBox:deep(input){
  width: 300px;
} */
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
