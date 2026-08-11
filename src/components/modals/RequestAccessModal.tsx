import React from 'react';
import { Modal, Form, Input, Select, Button, message } from 'antd';
import { Pickaxe, Lock } from 'lucide-react';

interface RequestAccessModalProps {
  open: boolean;
  onClose: () => void;
}

export const RequestAccessModal: React.FC<RequestAccessModalProps> = ({ open, onClose }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    message.success(`DMF Portal Access / Tracking request submitted for ${values.fullName}! A tracking ID has been sent to ${values.email}.`);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={560}
      title={null}
      closeIcon={null}
    >
      <div className="p-4 sm:p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#C6A75E]/20 text-[#C6A75E] flex items-center justify-center border border-[#C6A75E]/40">
            <Pickaxe className="w-7 h-7 text-[#C6A75E]" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#1F2A44]">
              DMF Royalty & Project Access Portal
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Request credentials for verified District Mineral Foundation project tracking and leaseholder filings.
            </p>
          </div>
        </div>

        {/* Ant Design Form */}
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-4 pt-2"
        >
          <Form.Item
            name="fullName"
            label={<span className="font-bold text-xs uppercase text-slate-600">Full Official Name</span>}
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Er. Rajesh Sharma" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label={<span className="font-bold text-xs uppercase text-slate-600">Email Address</span>}
            rules={[{ required: true, type: 'email', message: 'Please enter valid email' }]}
          >
            <Input placeholder="official@dmf.gov.in" size="large" />
          </Form.Item>

          <Form.Item
            name="userType"
            label={<span className="font-bold text-xs uppercase text-slate-600">User Category</span>}
            rules={[{ required: true, message: 'Select your role' }]}
          >
            <Select placeholder="Select Stakeholder Type" size="large">
              <Select.Option value="citizen">Mining-Affected Beneficiary / Citizen</Select.Option>
              <Select.Option value="leaseholder">Mining Leaseholder / Enterprise</Select.Option>
              <Select.Option value="official">District Administration Officer</Select.Option>
              <Select.Option value="ngo">Implementation Agency / NGO</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="miningLeaseNo"
            label={<span className="font-bold text-xs uppercase text-slate-600">Mining Lease No. / Gram Panchayat (Optional)</span>}
          >
            <Input placeholder="ML-DIST-2024-889" size="large" />
          </Form.Item>

          <div className="pt-2 flex items-center justify-between gap-4">
            <Button onClick={onClose} size="large" className="!rounded-xl !px-6">
              Cancel
            </Button>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large"
              icon={<Lock className="w-4 h-4 ml-1 text-[#1F2A44]" />}
              className="!bg-[#C6A75E] hover:!bg-[#B3934B] !text-[#1F2A44] !h-12 !px-8 !font-extrabold !rounded-xl !shadow-lg shadow-[#C6A75E]/30"
            >
              Submit Portal Request
            </Button>
          </div>
        </Form>

      </div>
    </Modal>
  );
};
