import React, {Component} from 'react';
import {Form, Input, message, Button} from 'antd';
import { utils } from 'libs';


const FormItem = Form.Item;

class addChannel extends Component {

    state = {

        channelSid:"",
        channelName:"",
        url:""
    }

    constructor(props) {

        super(props)

        this.id = this.props.match.params.id;

        this.getChannelInfo();
    }

    handleSubmit = (e) => {

        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {

            if(!err){

               this.submitChannelInfo(values)   
            }
        })
    }

    submitChannelInfo = (values) => {
      
        let url = `${values.url}?channelSid=${values.channelSid}`;

        values.url = url;
        values.id = this.id;

        let promise = utils.fetch({

            url:'/api/daichao/editChannel',
            data:values
        })

        promise.then(data => {
        
            message.success("修改成功", () => {
                
                this.props.history.push('/daichao/channelList')
            })
        })
    }

    getChannelInfo() {

        let promise = utils.fetch({
            method:'get',
            url: `/api/daichao/getChannel?id=${this.id}`
        })

        promise.then(res => {

            this.setState({
                channelSid:res.channelSid,
                channelName:res.channelName,
                url:res.url
            })
        })
    }

    render() {
        
        const formItemLayout = {
            labelCol:{
                xs:{span:24},
                sm:{span:3},
            },
            wrapperCol:{

                xs:{span:24},
                sm:{span:16}
            }
        }

          const tailFormItemLayout = {
              wrapperCol: {
                xs: {
                  span: 24,
                  offset: 0,
                },
                sm: {
                  span: 16,
                  offset: 3,
                },
              },
            };

        const { getFieldDecorator } = this.props.form;
        return (
            
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="渠道id"
                >
                {getFieldDecorator('channelSid', {
                    rules: [{
                      required: true, message: '请填写渠道id',
                    }],
                    initialValue:this.state.channelSid
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                {...formItemLayout}
                    label="渠道名称"
                >
                {
                    getFieldDecorator('channelName', {

                        rules:[{
                            required: true, message:'请填写渠道名称'
                        }],
                        initialValue:this.state.channelName
                    })(
                        <Input />
                    )
                }
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="链接"
                >
                {
                    getFieldDecorator('url', {

                        rules:[{

                            required:true, message:'请填写链接'
                        }],
                        initialValue:this.state.url
                    })(
                        <Input/>
                    )
                }
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">添加</Button>
                </FormItem>
            </Form>
            )
    }
} 

const AddChannelForm = Form.create()(addChannel);
export default AddChannelForm