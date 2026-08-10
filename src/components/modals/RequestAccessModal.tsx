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
          <div className="w-12 h-12 rounded-2xl bg-[#00796B]/10 text-[#00796B] flex items-center justify-center">
            <Pickaxe className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-[#1E293B]">
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
          requiredMark={false}
          className="space-y-4"
        >
          <Form.Item
            name="fullName"
            label={<span className="font-bold text-xs uppercase text-slate-600">Full Name / Mining Representative</span>}
            rules={[{ required: true, message: 'Please input full name' }]}
          >
            <Input placeholder="e.g. Ramesh Chandra Sharma" size="large" />
          </Form.Item>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Form.Item
              name="email"
              label={<span className="font-bold text-xs uppercase text-slate-600">Official Email</span>}
              rules={[
                { required: true, message: 'Please input your email' },
                { type: 'email', message: 'Enter a valid email address' }
              ]}
            >
              <Input placeholder="sharma@mining-dmf.gov.in" size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              label={<span className="font-bold text-xs uppercase text-slate-600">Phone Number</span>}
              rules={[{ required: true, message: 'Please input phone number' }]}
            >
              <Input placeholder="+91 98765 43210" size="large" />
            </Form.Item>
          </div>

          <Form.Item
            name="stakeholderType"
            label={<span className="font-bold text-xs uppercase text-slate-600">Stakeholder Category</span>}
            initialValue="citizen"
            rules={[{ required: true }]}
          >
            <Select size="large">
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
              icon={<Lock className="w-4 h-4 ml-1" />}
              className="!bg-[#00796B] hover:!bg-[#00695C] !h-12 !px-8 !font-bold !rounded-xl !shadow-lg"
            >
              Submit Portal Request
            </Button>
          </div>
        </Form>

      </div>
    </Modal>
  );
};
