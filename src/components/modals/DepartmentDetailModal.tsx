import React from 'react';
import { Modal, Button, Badge } from 'antd';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { DepartmentItem } from '../sections/DepartmentServices';

interface DepartmentDetailModalProps {
  department: DepartmentItem | null;
  onClose: () => void;
  onRequestAccess: () => void;
}

export const DepartmentDetailModal: React.FC<DepartmentDetailModalProps> = ({
  department,
  onClose,
  onRequestAccess,
}) => {
  if (!department) return null;

  return (
    <Modal
      open={!!department}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
      title={null}
    >
      <div className="p-4 sm:p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
          <div className="w-14 h-14 rounded-2xl bg-[#1998a1]/15 text-[#1998a1] flex items-center justify-center flex-shrink-0">
            {department.icon}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-extrabold text-[#184c5d]">
                {department.title}
              </h3>
              <Badge count={`${department.servicesCount} Sanctioned Projects`} style={{ backgroundColor: '#1998a1' }} />
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              DISTRICT MINERAL FOUNDATION TRUST SECTOR
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-base leading-relaxed font-medium">
          {department.description}
        </p>

        {/* Available Capabilities */}
        <div className="bg-[#F4F6F9] rounded-2xl p-5 space-y-3 border border-slate-200">
          <h4 className="text-sm font-bold text-[#184c5d] uppercase tracking-wider">
            Key DMF Sector Deliverables:
          </h4>
          <ul className="space-y-2 text-sm text-slate-700 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1998a1]" />
              <span>Real-time geo-tagged project tracking & expenditure audit</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1998a1]" />
              <span>Direct PMKKKY fund disbursement to accredited execution agencies</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1998a1]" />
              <span>Priority focus on high-impact mining affected villages</span>
            </li>
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <Button onClick={onClose} size="large" className="!rounded-xl !px-6">
            Close
          </Button>
          <Button 
            type="primary" 
            size="large"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
            onClick={() => {
              onClose();
              onRequestAccess();
            }}
            className="!bg-[#1998a1] hover:!bg-[#15828a] !h-12 !px-8 !font-bold !rounded-xl !shadow-lg"
          >
            Track Sector Fund
          </Button>
        </div>

      </div>
    </Modal>
  );
};
