import React, {Component} from 'react';
import {Form, Input, message, Button} from 'antd';
import { utils } from 'libs';


const FormItem = Form.Item;

class addChannel extends Component {

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

        let promise = utils.fetch({

            url:'/api/daichao/genChannel',
            data:values
        })

        promise.then(data => {

            this.props.history.push('/daichao/channelList')
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
                  })(
                    <Input />
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
                        }]
                    })(
                        <Input/>
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
                        }]
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