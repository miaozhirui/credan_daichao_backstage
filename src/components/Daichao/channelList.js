import React, { Component } from 'react';
import { utils } from 'libs';
import { Table, Button } from 'antd';



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
                title: 'url',
                dataIndex: 'url',
                width: "40%",
                render(param){
                    
                    return <a href={param} target="_blank">{param}</a>
                }
            },
            {
                title:"操作",
                width:"20%",
                render:(params, index) => {
                    
                    return (
                        <div>
                            <Button type="danger" onClick={()=>this.deleteChannel(params._id)}>删除</Button>
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

        let promise = utils.fetch({
            
            method:'get',
            url: `/api/daichao/deleteChannel?channelSid=${id}`
        })

        promise.then(res => {

           this.setState({

                data: this.state.data.filter(item=> item._id != id)
           })
        })

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