
<template>
  <div>
    <el-button type="primary" plain @click="add">增加按钮</el-button>
    <!-- 查询 -->
    <div>
      <el-input v-model="selectValue" placeholder="请输入内容"></el-input>
      <el-button @click="selectName">查询</el-button>
    </div>
    <el-table :data="showData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
       <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
          <el-form  :model="editForm">
            <el-input placeholder="请输入名字" v-model="editForm.name" clearable></el-input>
            <el-input placeholder="请输入地址" v-model="editForm.address" clearable></el-input>
          </el-form>
          <span slot="footer" class="dialog-footer">
              <el-button  @click="editClose()">取 消</el-button>
              <el-button type="primary" @click="onUpdate()">确 定</el-button>
            </span>
          </el-dialog>

           <el-dialog
            title="增加人员信息"
            :visible.sync="dialogVisibleAdd"
            width="30%"
            :before-close="handleClose"
          >
          <el-form  :model="addForm">
            <el-input placeholder="请输入id" v-model="addForm.id" clearable></el-input>
            <el-input placeholder="请输入名字" v-model="addForm.name" clearable></el-input>
            <el-input placeholder="请输入地址" v-model="addForm.address" clearable></el-input>
          </el-form>
             <span slot="footer" class="dialog-footer">
               <el-button  @click="addClose()">取 消</el-button>
               <el-button type="primary" @click="onAdd()">确 定</el-button>
               </span>
               </el-dialog>
               </div>
               </template>
<script>
export default {
  data () {
    return {
      list: ['aa'],
      selectValue: undefined,
      row: undefined,
      dialogVisible: false,
      inputNumber: undefined,
      dialogVisibleAdd: false,
      editForm: [
        {
          name: undefined,
          address: undefined
        }
      ],
      addForm: [
        {
          id: undefined,
          name: undefined,
          address: undefined
        }
      ],
      showData: [],
      tableData: [
        {
          id: 2,
          name: '王小er',
          address: '北京市普陀区金沙江路 1111 弄'
        },
        {
          id: 3,
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ]
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.showData = this.tableData
    },
    selectName () {
      if (this.selectValue !== undefined) {
        for (var j = 0, len = this.tableData.length; j < len; j++) {
          if (this.selectValue === this.tableData[j].name) {
            let a = []
            a.push(this.tableData[j])
            this.showData = a
          }
        }
      }
    },
    editClose () {
      this.dialogVisible = false
    },
    addClose () {
      this.dialogVisibleAdd = true
    },
    onAdd () {
      this.dialogVisibleAdd = false
      this.tableData.push(this.addForm)
    },
    onUpdate () {
      console.log(this.editForm)
      console.log(this.row.id)
      for (var i = 0, lens = this.tableData.length; i < lens; i++) {
        if (this.row.id === this.tableData[i].id) {
          this.tableData[i].name = this.editForm.name
          this.tableData[i].address = this.editForm.address
        }
      }
      this.dialogVisible = false
    },
    add () {
      this.dialogVisibleAdd = true
    },
    del () {},
    handleClose (done) {
      this.$confirm('确认关闭')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleEdit (index, row) {
      this.dialogVisible = true
      console.log(this.dialogVisible)
      this.editForm = Object.assign({}, row)
      this.row = row
    },
    handleDelete (index, row) {
      this.tableData.splice(index, 1)
      this.init()
    }
  }
}
</script>
