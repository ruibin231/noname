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
        <div style="margin-bottom: 10px;">
            <span>最大次数: </span> <el-input v-model="count" size="mini" width="50px"></el-input> <el-button type="primary" size="mini">计算</el-button>
        </div>
        
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
              <td><input v-model="settingData.heat" /></td>
              <td><input v-model="settingData.sulfur" /></td>
              <td><input v-model="settingData.water" /></td>
              <td><input v-model="settingData.volatilize" /></td>
              <td><input v-model="settingData.price" /></td>
            </tr>
          </tbody>
        </table>
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
                settingData: {heat: 0, sulfur: 0, water: 0, volatilize: 0, price: 0},
                bastRest: {heat: 0, sulfur: 0, water: 0, volatilize: 0, price: 0}
            }
        },
        created() {},
        methods: {
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
</style>>
