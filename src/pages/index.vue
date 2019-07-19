<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<template>
    <el-container>
      <el-header>计算一下子</el-header>
      <el-main>
        <div class="data-table">
          <table id="data-config-table">
            <thead>
              <tr>
                <th>区域</th>
                <th>热量</th>
                <th>硫</th>
                <th>水</th>
                <th>挥发</th>
                <th>价格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in configData" :key="index">
                <td><input v-model="configData[index].zone" /></td>
                <td><input v-model="configData[index].heat" /></td>
                <td><input v-model="configData[index].sulfur" /></td>
                <td><input v-model="configData[index].water" /></td>
                <td><input v-model="configData[index].volatilize" /></td>
                <td><input v-model="configData[index].price" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr><h4>设定值</h4>
        <table>
          <thead>
            <tr>
              <th>热量</th>
              <th>硫</th>
              <th>水</th>
              <th>挥发</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input v-model="settingData.heat.start" class="small-input" />-<input v-model="settingData.heat.end"  class="small-input"/></td>
              <td><input v-model="settingData.sulfur.start" class="small-input" />-<input v-model="settingData.sulfur.end" class="small-input" /></td>
              <td><input v-model="settingData.water.start" class="small-input" />-<input v-model="settingData.water.end" class="small-input" /></td>
              <td><input v-model="settingData.volatilize.start" class="small-input" />-<input v-model="settingData.volatilize.end" class="small-input" /></td>
              <td><input v-model="settingData.price.start" class="small-input" />-<input v-model="settingData.price.end" class="small-input" /></td>
            </tr>
          </tbody>
        </table>
        <div style="margin: 10px 10px;">
            <span>最大数量: </span> <el-input v-model="count" size="mini" width="50px"></el-input> <el-button type="primary" size="mini"@click="start">计算</el-button>
        </div>
        <hr><h4>结果</h4>
      </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                count: 10,
                titles: {zone: '区域', heat: '热量', sulfur: '硫', water: '水', volatilize: '挥发', price: '价格'},
                configData: [
                  {'zone': 'A区4号', 'heat': 6200, 'sulfur': 2, 'water': 4, 'volatilize': 14, 'price': 516},
                  {'zone': 'A区3号', 'heat': 4400, 'sulfur': 1, 'water': 6, 'volatilize': 22, 'price': 334},
                  {'zone': 'A区5号', 'heat': 4500, 'sulfur': 0.5, 'water': 8, 'volatilize': 14, 'price': 385},
                  {'zone': 'A区6号', 'heat': 1500, 'sulfur': 1, 'water': 8, 'volatilize': 14, 'price': 58},
                  {'zone': 'A区7号', 'heat': 3700, 'sulfur': 2.5, 'water': 8, 'volatilize': 14, 'price': 240},
                  {'zone': 'A区8号', 'heat': 3500, 'sulfur': 1, 'water': 6, 'volatilize': 14, 'price': 234}
                ],
                result: [],
                settingData: {heat: {start: 0, end: 0}, sulfur: {start: 0, end: 0}, water: {start: 0, end: 0}, volatilize: {start: 0, end: 0}, price: {start: 0, end: 0}},
                formatData: {},
                zoneCount: {},
            }
        },
        created() {
        },
        methods: {
            // 分配比例 zoneCount: {zone1: 1, zone2: 1, ...}
            // 用于计算的数据 formatData: {zone1: {zone: xx, heat: xx, ...}...}
            formatSource() {
                for(let index in this.configData) {
                    const data = this.configData[index]
                    this.formatData[data.zone] = Object.assign({}, data)
                    this.zoneCount[data.zone] = 1
                }
            },
            start() {
                this.formatSource()
                for(let z in this.zoneCount) {
                    console.log(z)
                }
            },
            recursion(data, expect) {
                rCount = 0
            },
        },
    }
</script>

<style type="text/css">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  table {
    border-collapse: collapse;
    width: 80%;
    /*background-color: #fff;*/
  }
  table, th, td {
    border: 1px solid #ddd;
  }
  th, td {
    text-align: center;
  }
  .el-input {
    width: 80px;
  }
  .small-input {
    width: 70px;
  }
</style>>
