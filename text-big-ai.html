import React, { useState, useEffect } from 'react';
import { FileText, Upload, Eye, AlertTriangle, CheckCircle, Clock, X, Search, Download, Send, Copy, Loader2, Repeat, ChevronDown, ChevronUp, Calendar, Globe, Layers, Filter } from 'lucide-react';

const DocumentProcessingInterface = () => {
  const [documents, setDocuments] = useState([
    {
      id: "doc-001",
      fileName: "John_Paystub_May2025.pdf",
      type: "paystub",
      status: "completed",
      uploadDate: "2025-09-22T10:00:00Z",
      fileSize: "245 KB",
      extractedData: {
        employeeName: "John Doe",
        employer: "ABC Corporation",
        grossPay: 5200.00,
        netPay: 3640.00,
        payPeriod: "05/01/2025 - 05/15/2025",
        ytdGross: 26000.00
      }
    },
    {
      id: "doc-002", 
      fileName: "John_DriverLicense_2025.pdf",
      type: "driverLicense",
      status: "completed",
      uploadDate: "2025-09-22T10:05:00Z",
      fileSize: "180 KB",
      extractedData: {
        fullName: "John Doe",
        address: "456 Maple St, Portland, OR 97201",
        licenseNumber: "D12345678",
        dateOfBirth: "1985-03-15",
        expirationDate: "2027-03-15"
      }
    },
    {
      id: "doc-003",
      fileName: "John_BankStatement_April2025.pdf", 
      type: "bankStatement",
      status: "completed",
      uploadDate: "2025-09-22T10:10:00Z",
      fileSize: "420 KB",
      extractedData: {
        accountHolder: "John Doe",
        accountNumber: "****1234",
        statementPeriod: "04/01/2025 - 04/30/2025",
        beginningBalance: 12450.00,
        endingBalance: 13200.00,
        transactions: [
          { date: "2025-04-15", description: "DEPOSIT PAYROLL ABC CORP", amount: 3640.00 },
          { date: "2025-04-28", description: "WITHDRAWAL ATM", amount: -200.00 },
          { date: "2025-04-30", description: "DEPOSIT GIFT", amount: 5000.00 }
        ]
      }
    }
  ]);

  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showClarificationModal, setShowClarificationModal] = useState(false);
  const [aiDraft, setAiDraft] = useState("");
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [expandedTransactions, setExpandedTransactions] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState("queue");
  const [crossDocumentIssues, setCrossDocumentIssues] = useState([]);
  const [pdfMarkupData, setPdfMarkupData] = useState(null);

  const expectedData = {
    employeeName: "John Doe",
    employer: "ABC Corporation", 
    address: "125 Madison Avenue, Portland, OR 97201",
    monthlyIncome: 5000.00
  };

  // Mock API calls
  const mockGetTasks = async () => {
    return [
      {
        id: 'task-001',
        documentId: 'doc-001',
        title: 'Income Verification Required',
        description: 'Verify paystub income variance',
        status: 'pending',
        priority: 'high'
      },
      {
        id: 'task-002', 
        documentId: 'doc-002',
        title: 'Address Discrepancy',
        description: 'Resolve address mismatch',
        status: 'in_progress',
        priority: 'medium'
      }
    ];
  };

  const mockAnalyzeCrossDocuments = () => {
    return [
      {
        type: 'paystub_gap',
        severity: 'high',
        description: 'Gap detected in paystub sequence - missing employment documentation',
        resolution: 'Provide missing paystubs to fill the gap'
      },
      {
        type: 'income_cross_check',
        severity: 'medium',
        description: 'Income variance between paystub and bank deposits detected',
        resolution: 'Verify income consistency across all documents'
      }
    ];
  };

  useEffect(() => {
    const loadData = async () => {
      const allTasks = await mockGetTasks();
      setTasks(allTasks);
      
      const issues = mockAnalyzeCrossDocuments();
      setCrossDocumentIssues(issues);
    };
    
    loadData();
  }, [documents]);

  const handleDocumentAction = async (documentId, action, notes = '') => {
    try {
      switch (action) {
        case 'accepted':
        case 'rejected':
        case 'completed':
          setDocuments(prev => prev.map(doc => 
            doc.id === documentId ? { ...doc, status: action } : doc
          ));
          alert(`Document ${action} successfully!`);
          break;
          
        case 'delete':
          if (window.confirm('Are you sure you want to delete this document?')) {
            setDocuments(prev => prev.filter(doc => doc.id !== documentId));
            if (selectedDocument && selectedDocument.id === documentId) {
              setSelectedDocument(null);
            }
            alert('Document deleted successfully!');
          }
          break;
          
        case 'override_1003':
          console.log('1003 Override applied:', notes);
          alert('1003 Data override applied successfully!');
          break;
          
        default:
          console.log('Unknown action:', action);
      }
    } catch (error) {
      console.error('Error handling document action:', error);
      alert('Error performing action. Please try again.');
    }
  };

  const handleFileUpload = async (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    setUploading(true);
    
    for (const file of files) {
      try {
        const newDoc = {
          id: `doc-${Date.now()}`,
          fileName: file.name,
          type: detectDocumentType(file.name),
          status: "processing",
          uploadDate: new Date().toISOString(),
          fileSize: `${Math.round(file.size / 1024)} KB`,
          extractedData: null
        };

        setDocuments(prev => [newDoc, ...prev]);

        // Simulate processing
        setTimeout(() => {
          setDocuments(prev => prev.map(doc => 
            doc.id === newDoc.id 
              ? { ...doc, status: "completed", extractedData: { processed: true } }
              : doc
          ));
        }, 3000);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
    
    setUploading(false);
    event.target.value = '';
  };

  const detectDocumentType = (fileName) => {
    const name = fileName.toLowerCase();
    if (name.includes('paystub') || name.includes('pay')) return 'paystub';
    if (name.includes('license') || name.includes('id')) return 'driverLicense';
    if (name.includes('bank') || name.includes('statement')) return 'bankStatement';
    return 'other';
  };

  const getDiscrepancies = () => {
    const issues = [];
    
    const licenseDoc = documents.find(d => d.type === 'driverLicense' && d.extractedData);
    if (licenseDoc && licenseDoc.extractedData.address !== expectedData.address) {
      issues.push({
        type: 'address_mismatch',
        description: `Address discrepancy: License shows "${licenseDoc.extractedData.address}" but application shows "${expectedData.address}"`,
        resolution: 'Letter of explanation for address discrepancy'
      });
    }

    const paystubDoc = documents.find(d => d.type === 'paystub' && d.extractedData);
    if (paystubDoc && paystubDoc.extractedData.grossPay !== expectedData.monthlyIncome) {
      issues.push({
        type: 'income_variance',
        description: `Income variance: Paystub shows $${paystubDoc.extractedData.grossPay} but application shows $${expectedData.monthlyIncome}`,
        resolution: 'Provide most recent paystub and verification of employment'
      });
    }

    return issues;
  };

  const generateAIDraft = async () => {
    setIsGeneratingAI(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const issues = [...getDiscrepancies(), ...crossDocumentIssues];
    const template = `Dear ${expectedData.employeeName},

Thank you for submitting your loan documentation. Our automated review system has identified the following items that require clarification:

${issues.map(issue => `• ${issue.description}`).join('\n')}

To move forward with your application, please provide the following:

${issues.map(issue => `• ${issue.resolution}`).join('\n')}

You can submit these documents through your secure borrower portal.

Best regards,
Document Processing Team
BIG POS Mortgage Solutions`;

    setAiDraft(template);
    setIsGeneratingAI(false);
  };

  const createTask = (type, description) => {
    console.log(`Creating task: ${type} - ${description}`);
    alert(`Task created: ${description}`);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'processing': return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'failed': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default: return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'accepted': return 'text-green-600 bg-green-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      case 'completed': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Override Modal Component
  const Override1003Modal = ({ document, onClose, onOverride }) => {
    const [overrideData, setOverrideData] = useState({
      income: '',
      employment: '',
      address: '',
      reason: '',
      approvedBy: ''
    });

    const handleSubmit = () => {
      if (!overrideData.reason) {
        alert('Please provide a reason for the override');
        return;
      }
      onOverride(overrideData);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Override 1003 Data</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Income Override</label>
              <input
                type="text"
                value={overrideData.income}
                onChange={(e) => setOverrideData({...overrideData, income: e.target.value})}
                className="w-full border rounded px-3 py-2"
                placeholder="New income amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Reason for Override *</label>
              <textarea
                value={overrideData.reason}
                onChange={(e) => setOverrideData({...overrideData, reason: e.target.value})}
                className="w-full border rounded px-3 py-2 h-20"
                placeholder="Explain why this override is necessary..."
                required
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-600 border rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Apply Override
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Document Actions Component
  const DocumentActions = ({ document, onAction }) => {
    const [showActions, setShowActions] = useState(false);
    const [showOverrideModal, setShowOverrideModal] = useState(false);

    const handleAction = async (action, notes = '') => {
      await onAction(document.id, action, notes);
      setShowActions(false);
    };

    return (
      <div className="relative">
        <button
          onClick={() => setShowActions(!showActions)}
          className="p-2 text-gray-400 hover:text-gray-600"
        >
          <ChevronDown className="w-4 h-4" />
        </button>

        {showActions && (
          <div className="absolute right-0 top-8 bg-white border rounded-lg shadow-lg z-10 min-w-48">
            <div className="p-2 space-y-1">
              <button
                onClick={() => handleAction('accepted')}
                className="w-full text-left px-3 py-2 text-sm hover:bg-green-50 text-green-700 rounded"
              >
                ✓ Accept Document
              </button>
              <button
                onClick={() => handleAction('rejected')}
                className="w-full text-left px-3 py-2 text-sm hover:bg-red-50 text-red-700 rounded"
              >
                ✗ Reject Document
              </button>
              <button
                onClick={() => handleAction('completed')}
                className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 text-blue-700 rounded"
              >
                ✓ Mark Complete
              </button>
              <button
                onClick={() => setShowOverrideModal(true)}
                className="w-full text-left px-3 py-2 text-sm hover:bg-purple-50 text-purple-700 rounded"
              >
                ⚡ Override 1003 Data
              </button>
              <hr className="my-1" />
              <button
                onClick={() => handleAction('delete')}
                className="w-full text-left px-3 py-2 text-sm hover:bg-red-50 text-red-700 rounded"
              >
                🗑️ Delete Document
              </button>
            </div>
          </div>
        )}

        {showOverrideModal && (
          <Override1003Modal
            document={document}
            onClose={() => setShowOverrideModal(false)}
            onOverride={(overrideData) => {
              handleAction('override_1003', JSON.stringify(overrideData));
              setShowOverrideModal(false);
            }}
          />
        )}
      </div>
    );
  };

  // Document Card Component
  const DocumentCard = ({ document, isSelected, onSelect, onAction, tasks }) => {
    const documentTasks = tasks.filter(task => task.documentId === document.id);

    return (
      <div
        className={`border rounded-lg cursor-pointer transition-all ${
          isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md'
            : 'border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm'
        }`}
      >
        <div className="p-4" onClick={() => onSelect(document)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              {getStatusIcon(document.status)}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{document.fileName}</h4>
                <p className="text-sm text-gray-600">
                  {document.type} • {document.fileSize} • {new Date(document.uploadDate).toLocaleDateString()}
                </p>
                {document.status !== 'processing' && (
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${getStatusColor(document.status)}`}>
                    {document.status.replace('_', ' ').toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-1">
              <button 
                onClick={(e) => { e.stopPropagation(); }} 
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); }} 
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <Download className="w-4 h-4" />
              </button>
              <div onClick={(e) => e.stopPropagation()}>
                <DocumentActions document={document} onAction={onAction} />
              </div>
            </div>
          </div>
        </div>

        {documentTasks.length > 0 && (
          <div className="px-4 pb-4">
            <div className="border-t pt-3">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Assigned Tasks ({documentTasks.length})</h5>
              <div className="space-y-2">
                {documentTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{task.title}</p>
                      <p className="text-gray-600 text-xs truncate">{task.description}</p>
                    </div>
                    <div className="flex gap-2 ml-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        task.priority === 'high' ? 'bg-red-100 text-red-600' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {task.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // PDF Viewer Component
  const PDFViewerWithMarkup = ({ document }) => {
    const [showAnnotations, setShowAnnotations] = useState(true);

    return (
      <div className="bg-white border rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">PDF Viewer - {document.fileName}</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setShowAnnotations(!showAnnotations)}
              className={`px-3 py-1 rounded text-sm flex items-center gap-2 ${
                showAnnotations ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Eye className="w-4 h-4" />
              {showAnnotations ? 'Hide Issues' : 'Show Issues'}
            </button>
          </div>
        </div>

        <div className="relative border rounded bg-gray-50 h-96 overflow-auto">
          <div className="p-8 bg-white m-4 shadow-sm relative" style={{ minHeight: '400px', width: '600px' }}>
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold">PAYSTUB</h3>
              <p className="text-sm text-gray-600">ABC Corporation</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between relative">
                <span>Employee Name:</span>
                <span className="relative">
                  John Doe
                  {showAnnotations && (
                    <div className="absolute inset-0 bg-green-200 opacity-50" 
                         title="Employee name verified">
                    </div>
                  )}
                </span>
              </div>
              
              <div className="flex justify-between relative">
                <span>Gross Pay:</span>
                <span className="relative">
                  $5,200.00
                  {showAnnotations && (
                    <div className="absolute inset-0 bg-red-200 opacity-70 border-2 border-red-400" 
                         title="Income variance detected">
                    </div>
                  )}
                </span>
              </div>
              
              <div className="flex justify-between relative">
                <span>Address:</span>
                <span className="relative text-sm">
                  456 Maple St, Portland, OR 97201
                  {showAnnotations && (
                    <div className="absolute inset-0 bg-orange-200 opacity-60 border border-orange-400" 
                         title="Address mismatch detected">
                    </div>
                  )}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Net Pay:</span>
                <span>$3,640.00</span>
              </div>
            </div>
          </div>
        </div>

        {showAnnotations && (
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <h5 className="font-medium mb-2">Issue Severity Legend:</h5>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-200 border-2 border-red-400 rounded"></div>
                <span>High Priority Issues</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-200 border border-orange-400 rounded"></div>
                <span>Medium Priority Issues</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-200 rounded"></div>
                <span>Verified/No Issues</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Global Files Tab Component
  const GlobalFilesTab = ({ documents, crossDocumentIssues, onDocumentSelect }) => {
    const [viewMode, setViewMode] = useState('timeline');

    const renderTimelineView = () => (
      <div className="space-y-4">
        <h4 className="font-semibold mb-4">Document Timeline & Cross-Document Analysis</h4>
        
        {crossDocumentIssues.length > 0 && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
            <h5 className="font-medium text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Cross-Document Issues Found ({crossDocumentIssues.length})
            </h5>
            <div className="space-y-2">
              {crossDocumentIssues.map((issue, index) => (
                <div key={index} className="text-sm">
                  <p className="text-red-700 font-medium">{issue.description}</p>
                  <p className="text-red-600">Resolution: {issue.resolution}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white border rounded-lg p-4">
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center gap-4 p-3 border rounded hover:bg-gray-50 cursor-pointer"
                   onClick={() => onDocumentSelect(doc)}>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium truncate">{doc.fileName}</p>
                      <p className="text-sm text-gray-600 capitalize">{doc.type}</p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-medium">{new Date(doc.uploadDate).toLocaleDateString()}</p>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(doc.status)}`}>
                        {doc.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    const renderGridView = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <div key={doc.id} 
               className="border rounded-lg p-4 hover:shadow-md cursor-pointer transition-shadow"
               onClick={() => onDocumentSelect(doc)}>
            <div className="flex items-start justify-between mb-2">
              <FileText className="w-8 h-8 text-blue-500" />
              <span className={`px-2 py-1 rounded text-xs ${getStatusColor(doc.status)}`}>
                {doc.status}
              </span>
            </div>
            <h4 className="font-medium truncate mb-1">{doc.fileName}</h4>
            <p className="text-sm text-gray-600 capitalize mb-2">{doc.type}</p>
            <p className="text-xs text-gray-500">{new Date(doc.uploadDate).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    );

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-3 py-2 rounded flex items-center gap-2 ${
              viewMode === 'timeline' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Timeline
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-2 rounded flex items-center gap-2 ${
              viewMode === 'grid' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Layers className="w-4 h-4" />
            Grid
          </button>
        </div>

        {viewMode === 'timeline' ? renderTimelineView() : renderGridView()}
      </div>
    );
  };

  // Document Review Components
  const PaystubReview = ({ data, expected, onCreateTask }) => (
    <div className="bg-white border rounded-lg p-6">
      <h4 className="font-semibold mb-4">Paystub Information</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h5 className="font-medium mb-3">Extracted Data</h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Employee:</span> 
              <span className="font-medium">{data.employeeName}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Gross Pay:</span> 
              <span className="font-medium">${data.grossPay?.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div>
          <h5 className="font-medium mb-3">Expected Values</h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
              <span className="text-gray-600">Employee:</span> 
              <span className="font-medium">{expected.employeeName}</span>
            </div>
            <div className={`flex justify-between items-center p-2 rounded ${
              data.grossPay !== expected.monthlyIncome ? 'bg-red-50 border border-red-200' : 'bg-blue-50'
            }`}>
              <span className="text-gray-600">Monthly Income:</span> 
              <span className={`font-medium ${data.grossPay !== expected.monthlyIncome ? 'text-red-600' : ''}`}>
                ${expected.monthlyIncome?.toLocaleString()}
              </span>
            </div>
          </div>
          
          {data.grossPay !== expected.monthlyIncome && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <p className="text-red-800 text-sm font-medium">Income Variance Detected</p>
              </div>
              <button
                onClick={() => onCreateTask('income_verification', 'Income variance requires verification')}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
              >
                Convert to Task
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const DriverLicenseReview = ({ data, expected, onCreateTask }) => (
    <div className="bg-white border rounded-lg p-6">
      <h4 className="font-semibold mb-4">Driver License Information</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h5 className="font-medium mb-3">Extracted Data</h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
              <span className="text-gray-600">Name:</span> 
              <span className="font-medium">{data.fullName}</span>
            </div>
            <div className={`flex justify-between items-start p-2 rounded ${
              data.address !== expected.address ? 'bg-red-50 border border-red-200' : 'bg-gray-50'
            }`}>
              <span className="text-gray-600">Address:</span> 
              <span className={`font-medium text-right max-w-xs ${
                data.address !== expected.address ? 'text-red-600' : ''
              }`}>
                {data.address}
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <h5 className="font-medium mb-3">Expected Values</h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
              <span className="text-gray-600">Name:</span> 
              <span className="font-medium">{expected.employeeName}</span>
            </div>
            <div className="flex justify-between items-start p-2 bg-blue-50 rounded">
              <span className="text-gray-600">Address:</span> 
              <span className="font-medium text-right max-w-xs">{expected.address}</span>
            </div>
          </div>
          
          {data.address !== expected.address && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <p className="text-red-800 text-sm font-medium">Address Mismatch Detected</p>
              </div>
              <button
                onClick={() => onCreateTask('address_verification', 'Address discrepancy requires explanation')}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
              >
                Convert to Task
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const BankStatementReview = ({ data, onCreateTask }) => {
    const largeDeposits = data.transactions?.filter(t => t.amount > 3000) || [];

    return (
      <div className="space-y-4">
        <div className="bg-white border rounded-lg p-6">
          <h4 className="font-semibold mb-4">Bank Statement Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-gray-600 text-sm">Account Holder</p>
              <p className="font-medium text-lg">{data.accountHolder}</p>
            </div>
            <div className="p-3 bg-green-50 rounded">
              <p className="text-gray-600 text-sm">Beginning Balance</p>
              <p className="font-medium text-lg text-green-600">${data.beginningBalance?.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <p className="text-gray-600 text-sm">Ending Balance</p>
              <p className="font-medium text-lg text-blue-600">${data.endingBalance?.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {largeDeposits.length > 0 && (
          <div className="bg-white border rounded-lg p-6">
            <h5 className="font-medium text-yellow-800 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Large Deposits Requiring Documentation
            </h5>
            <div className="space-y-3">
              {largeDeposits.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-yellow-50 rounded border">
                  <div className="flex-1">
                    <p className="font-medium">${transaction.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                    <p className="text-sm text-gray-700">{transaction.description}</p>
                  </div>
                  <button
                    onClick={() => onCreateTask('large_deposit', `Source documentation needed for ${transaction.amount.toLocaleString()} deposit`)}
                    className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700"
                  >
                    Convert to Task
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Clarification Modal
  const ClarificationModal = ({ isOpen, onClose, discrepancies, aiDraft, isGeneratingAI, onGenerateAI, onCopyDraft, setAiDraft }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto w-full mx-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Request Clarification</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Issues Found</h3>
              <div className="space-y-4">
                {discrepancies.map((issue, index) => (
                  <div key={index} className="p-4 border border-red-200 rounded-lg bg-red-50">
                    <h4 className="font-medium text-red-800 mb-2">{issue.type.replace('_', ' ').toUpperCase()}</h4>
                    <p className="text-sm text-red-700 mb-2">{issue.description}</p>
                    <p className="text-sm text-red-600 font-medium">Required: {issue.resolution}</p>
                  </div>
                ))}
                
                {discrepancies.length === 0 && (
                  <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                    <p className="text-green-800">No discrepancies found. All documents appear to be in order.</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">BIG AI Communication Draft</h3>
                <button
                  onClick={onGenerateAI}
                  disabled={isGeneratingAI}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50 flex items-center gap-2"
                >
                  {isGeneratingAI ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Repeat className="w-4 h-4" />
                      Use BIG AI
                    </>
                  )}
                </button>
              </div>

              {aiDraft && (
                <div className="space-y-4">
                  <textarea
                    value={aiDraft}
                    onChange={(e) => setAiDraft(e.target.value)}
                    className="w-full h-64 p-3 border rounded-lg text-sm"
                    placeholder="AI-generated communication will appear here..."
                  />
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => onCopyDraft(aiDraft)}
                      className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Draft
                    </button>
                    <button
                      onClick={() => {
                        alert('Communication sent to borrower!');
                        onClose();
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Communication
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Tab Navigation
  const renderTabNavigation = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex space-x-6">
        <button
          onClick={() => setActiveTab("queue")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
            activeTab === "queue" 
              ? 'bg-blue-100 text-blue-700' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <FileText className="w-5 h-5" />
          Document Queue
        </button>
        <button
          onClick={() => setActiveTab("global")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
            activeTab === "global" 
              ? 'bg-blue-100 text-blue-700' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Globe className="w-5 h-5" />
          Global Files
          {crossDocumentIssues.length > 0 && (
            <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {crossDocumentIssues.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("viewer")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
            activeTab === "viewer" 
              ? 'bg-blue-100 text-blue-700' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
          disabled={!selectedDocument}
        >
          <Eye className="w-5 h-5" />
          PDF Viewer
        </button>
      </div>
    </div>
  );

  // Document Queue
  const renderDocumentQueue = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Document Queue ({documents.length})</h3>
        <label className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 flex items-center gap-2">
          <Upload className="w-4 h-4" />
          {uploading ? 'Uploading...' : 'Upload Documents'}
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            className="hidden"
            disabled={uploading}
          />
        </label>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            document={doc}
            isSelected={selectedDocument?.id === doc.id}
            onSelect={setSelectedDocument}
            onAction={handleDocumentAction}
            tasks={tasks}
          />
        ))}
      </div>
    </div>
  );

  // Document Review
  const renderDocumentReview = () => {
    if (!selectedDocument) {
      return (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <div className="text-center">
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Select a document to review extracted data</p>
          </div>
        </div>
      );
    }

    if (!selectedDocument.extractedData) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-blue-600" />
            <p className="text-gray-600">Processing document...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Document Review: {selectedDocument.fileName}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("viewer")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View PDF with Issues
            </button>
            <button
              onClick={() => setShowClarificationModal(true)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Request Clarification
            </button>
          </div>
        </div>

        {selectedDocument.type === 'paystub' && (
          <PaystubReview 
            data={selectedDocument.extractedData} 
            expected={expectedData}
            onCreateTask={createTask}
          />
        )}

        {selectedDocument.type === 'driverLicense' && (
          <DriverLicenseReview 
            data={selectedDocument.extractedData} 
            expected={expectedData}
            onCreateTask={createTask}
          />
        )}

        {selectedDocument.type === 'bankStatement' && (
          <BankStatementReview 
            data={selectedDocument.extractedData}
            onCreateTask={createTask}
          />
        )}
      </div>
    );
  };

  // Main Content
  const renderMainContent = () => {
    switch (activeTab) {
      case "queue":
        return (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-4">
              {renderDocumentQueue()}
            </div>
            <div className="col-span-8">
              {renderDocumentReview()}
            </div>
          </div>
        );
      
      case "global":
        return (
          <GlobalFilesTab 
            documents={documents}
            crossDocumentIssues={crossDocumentIssues}
            onDocumentSelect={(doc) => {
              setSelectedDocument(doc);
              setActiveTab("queue");
            }}
          />
        );
      
      case "viewer":
        return selectedDocument ? (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <PDFViewerWithMarkup document={selectedDocument} />
            </div>
            <div className="col-span-7">
              {renderDocumentReview()}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 text-gray-500">
            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Select a document to view PDF with highlighted issues</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Document Processing Interface</h1>
        <p className="text-gray-600">Integrated with BIG POS API and TextTract for automated document processing</p>
        
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded">
            <p className="text-blue-600 text-sm font-medium">Total Documents</p>
            <p className="text-2xl font-bold text-blue-700">{documents.length}</p>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <p className="text-green-600 text-sm font-medium">Completed</p>
            <p className="text-2xl font-bold text-green-700">
              {documents.filter(d => d.status === 'completed').length}
            </p>
          </div>
          <div className="bg-yellow-50 p-3 rounded">
            <p className="text-yellow-600 text-sm font-medium">Processing</p>
            <p className="text-2xl font-bold text-yellow-700">
              {documents.filter(d => d.status === 'processing').length}
            </p>
          </div>
          <div className="bg-red-50 p-3 rounded">
            <p className="text-red-600 text-sm font-medium">Cross-Doc Issues</p>
            <p className="text-2xl font-bold text-red-700">{crossDocumentIssues.length}</p>
          </div>
        </div>
      </div>

      {renderTabNavigation()}
      {renderMainContent()}

      <ClarificationModal
        isOpen={showClarificationModal}
        onClose={() => setShowClarificationModal(false)}
        discrepancies={[...getDiscrepancies(), ...crossDocumentIssues]}
        aiDraft={aiDraft}
        isGeneratingAI={isGeneratingAI}
        onGenerateAI={generateAIDraft}
        onCopyDraft={copyToClipboard}
        setAiDraft={setAiDraft}
      />
    </div>
  );
};

export default DocumentProcessingInterface;
