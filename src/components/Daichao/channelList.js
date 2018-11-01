import React, { Component } from 'react';
import { utils } from 'libs';
import { Table, Button, Modal, message } from 'antd';
import url from 'url';



export default class ChannelList extends Component {

    state = {

        data: [],
        pagination: {},
        loading: false
    }

    constructor() {
        super()
        this.columns = [{
            title: '渠道id',
            dataIndex: 'channelSid',
            width: "20%"
            },
            {
                title: '渠道名称',
                dataIndex: 'channelName',
                width: "20%"
            },
            {
                title: '页面',
                dataIndex: 'url',
                width: "40%",
                render(param){
                    
                    let data = url.parse(param,true);
                    
                    let pages = [

                        {
                            url:'register.html',
                            name:"注册"
                        },
                        {
                            url:'download.html',
                            name:"下载"
                        }
                    ]
                    
                    let partUrl = data.pathname.slice(0,data.pathname.indexOf(data.pathname.split('/').pop()));
                  
                    return (
                        <div>
                            {
                                pages.map((item, index) => {
                                        
                                    let url = `${data.protocol}//${data.host}${partUrl}${item.url}${data.search}`;

                                    return <Button type="default" style={{marginRight:"5px"}}><a href={url} target="_blank" key={index}>{item.name}</a></Button>
                                })
                            }
                        </div>
                    )
                }
            },
            {
                title:"操作",
                width:"20%",
                render:(params, index) => {
                    
                    return (
                        <div>
                            <Button type="danger" onClick={()=>this.deleteChannel(params._id)}>删除</Button>
                            <Button style={{marginLeft:"5px"}} type="primary" onClick={()=>this.editChannel(params._id)}>编辑</Button>
                        </div>
                    )
                }
            }
        ]
    }

    componentDidMount() {

        this.fetch()
    }

    deleteChannel(id) {

        Modal.confirm({
            title:"确认删除吗？",
            onOk:() => {

                let promise = utils.fetch({
            
                    method:'get',
                    url: `/api/daichao/deleteChannel?channelSid=${id}`
                })
        
                promise.then(res => {
        
                   this.setState({
        
                        data: this.state.data.filter(item=> item._id != id)
                   },() => {

                        message.success("删除成功");
                   })
                })
            }
        })
        

    }

    editChannel(id) {

        this.props.history.push(`/daichao/editChannel/${id}`);
    }

    fetch(params = {}) {

        this.setState({ loading: true });

        let promise = utils.fetch({

            method: 'get',
            url: '/api/daichao/getChannelList'
        })

        promise.then(res => {

            this.setState({
                loading: false,
                data: res
            })
        })
    }

    render() {

        return ( <Table columns = { this.columns } rowKey="_id"  dataSource = { this.state.data }
            pagination = { this.state.pagination } loading = { this.state.loading }/>
        )
    }
}