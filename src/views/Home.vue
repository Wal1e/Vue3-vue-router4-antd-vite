<template>
  <div>
    <a-button @click="getList" type="primary">getList</a-button>
    <a-button @click="getTitleByName" type="primary">getTitleByName</a-button>
    <a-button @click="insertUser" type="primary">Insert</a-button>
    <a-button @click="deleteUser" type="primary">Delete</a-button>
    <a-button @click="updateUser" type="primary">Update</a-button>
    <a-button @click="createTable" type="primary">createTable</a-button>
  </div>
  <div class="user-table">
    <a-table :columns="columns" :data-source="data" :row-key="row=>row.id">
      <template #name="{id}">
        <a>{{ id }}</a>
      </template>
    </a-table>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import config from '../config'
import fetch from '../util/fetch.js'

import { reactive } from 'vue'
export default {
  setup(){
    const router = new useRouter();
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        slots: { customRender: 'id' },
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: 80,
      },
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        ellipsis: true,
      },
    ];
    let data = reactive([]);
    const createTable = () => {
      fetch.get(`${config.serverUrl}/users/createTable`)
      .then(res=>{
        // 创建表成功的操作
      })
    }
    const getList = () =>{
      fetch.get(`${config.serverUrl}/users/list`)
      .then(res=>{
        // data.values = res.data;
        data.splice(0,data.length);
        res.data.forEach(element => {
          data.push(element)
        });
      })
    };
    const insertUser = () =>{
      fetch.post(`${config.serverUrl}/users/insert`,{title:'lala',username:"mike"})
      .then(res=>{
        
      })
    };
    const deleteUser = () =>{
      fetch.get(`${config.serverUrl}/users/deleteUser?id=4`)
      .then(res=>{
        
      })
    };
    const updateUser = () =>{
      fetch.post(`${config.serverUrl}/users/updateUser`,{id: 3, title:'laUpdate',username:"mikeee"})
      .then(res=>{
        
      })
    };
    const getTitleByName = () =>{
      fetch.get(`${config.serverUrl}/users/titleByName`)
      .then(res=>{
        data.splice(0,data.length);
        res.data.forEach(element => {
          data.push(element)
        });
      })
    }
    return {
      columns,
      data,
      createTable,
      getList,
      insertUser,
      deleteUser,
      updateUser,
      getTitleByName
    }
  }
}
</script>
<style>
  .user-table{
    width: 50%;
  }
</style>