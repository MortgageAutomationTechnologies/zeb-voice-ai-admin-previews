<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice AI Admin - Commands List</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #f8f9fa;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 28px;
            font-weight: 600;
            color: #2c3e50;
        }

        .header-actions {
            display: flex;
            gap: 12px;
        }

        .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
        }

        .btn-primary {
            background-color: #e74c3c;
            color: white;
        }

        .btn-primary:hover {
            background-color: #c0392b;
        }

        .btn-secondary {
            background-color: #ecf0f1;
            color: #2c3e50;
            border: 1px solid #bdc3c7;
        }

        .btn-secondary:hover {
            background-color: #d5dbdb;
        }

        .filters {
            background: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .filters-row {
            display: flex;
            gap: 20px;
            align-items: center;
            flex-wrap: wrap;
        }

        .filter-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .filter-group label {
            font-size: 14px;
            font-weight: 500;
            color: #555;
        }

        .filter-input {
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
        }

        .filter-select {
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            background-color: white;
            cursor: pointer;
        }

        .commands-section {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .section-header {
            padding: 20px;
            border-bottom: 1px solid #ecf0f1;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #2c3e50;
        }

        .bulk-actions {
            display: flex;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .bulk-actions.visible {
            opacity: 1;
        }

        .command-item {
            display: flex;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 1px solid #ecf0f1;
            transition: background-color 0.2s;
        }

        .command-item:hover {
            background-color: #f8f9fa;
        }

        .command-item:last-child {
            border-bottom: none;
        }

        .command-checkbox {
            margin-right: 15px;
        }

        .command-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .command-main {
            font-size: 16px;
            font-weight: 500;
            color: #2c3e50;
        }

        .command-sub {
            font-size: 14px;
            color: #7f8c8d;
        }

        .command-category {
            font-size: 12px;
            color: #95a5a6;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .command-meta {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-right: 15px;
        }

        .usage-stats {
            font-size: 12px;
            color: #7f8c8d;
        }

        .status-badge {
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 500;
            text-transform: uppercase;
        }

        .status-badge.ready {
            background-color: #d5f4e6;
            color: #27ae60;
        }

        .status-badge.pending {
            background-color: #fff3cd;
            color: #856404;
        }

        .toggle-switch {
            position: relative;
            width: 44px;
            height: 24px;
            margin-right: 15px;
        }

        .toggle-input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: 0.3s;
            border-radius: 24px;
        }

        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.3s;
            border-radius: 50%;
        }

        .toggle-input:checked + .toggle-slider {
            background-color: #e74c3c;
        }

        .toggle-input:checked + .toggle-slider:before {
            transform: translateX(20px);
        }

        .command-actions {
            position: relative;
        }

        .three-dots-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            border-radius: 4px;
            transition: background-color 0.2s;
        }

        .three-dots-btn:hover {
            background-color: #ecf0f1;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            background: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            min-width: 150px;
            display: none;
        }

        .dropdown-menu.show {
            display: block;
        }

        .dropdown-item {
            padding: 10px 15px;
            cursor: pointer;
            font-size: 14px;
            color: #555;
            border-bottom: 1px solid #f1f1f1;
            transition: background-color 0.2s;
        }

        .dropdown-item:hover {
            background-color: #f8f9fa;
        }

        .dropdown-item:last-child {
            border-bottom: none;
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #7f8c8d;
        }

        .empty-state h3 {
            margin-bottom: 10px;
            color: #95a5a6;
        }

        .stats-bar {
            display: flex;
            justify-content: space-between;
            padding: 15px 20px;
            background-color: #f8f9fa;
            border-bottom: 1px solid #ecf0f1;
            font-size: 14px;
            color: #7f8c8d;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>Voice AI Commands</h1>
            <div class="header-actions">
                <button class="btn btn-secondary">Import Commands</button>
                <button class="btn btn-secondary">Export Settings</button>
                <button class="btn btn-primary">+ New Command</button>
            </div>
        </div>

        <!-- Filters -->
        <div class="filters">
            <div class="filters-row">
                <div class="filter-group">
                    <label>Search Commands</label>
                    <input type="text" class="filter-input" placeholder="Search by name or trigger phrase..." style="width: 300px;">
                </div>
                <div class="filter-group">
                    <label>Category</label>
                    <select class="filter-select">
                        <option value="all">All Categories</option>
                        <option value="search">1. Search</option>
                        <option value="updates">2. Data Updates</option>
                        <option value="services">3. Services</option>
                        <option value="mi">4. MI Quotes</option>
                        <option value="documents">5. Documents</option>
                        <option value="tasks">6. Task Management</option>
                        <option value="applications">7. New Applications</option>
                        <option value="bi">8. Business Intelligence</option>
                        <option value="communication">9. Communication</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label>Status</label>
                    <select class="filter-select">
                        <option value="all">All Status</option>
                        <option value="active">Active Only</option>
                        <option value="inactive">Inactive Only</option>
                        <option value="ready">Ready</option>
                        <option value="pending">Pending API</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Commands Section -->
        <div class="commands-section">
            <div class="section-header">
                <div class="section-title">Voice Commands (63 total)</div>
                <div class="bulk-actions" id="bulkActions">
                    <button class="btn btn-secondary">Enable Selected</button>
                    <button class="btn btn-secondary">Disable Selected</button>
                    <button class="btn btn-secondary">Delete Selected</button>
                </div>
            </div>

            <div class="stats-bar">
                <span>41 Active Commands</span>
                <span>22 Pending API Configuration</span>
                <span>Last Updated: 2 hours ago</span>
            </div>

            <!-- Command List -->
            <div class="commands-list">
                <!-- Search Commands -->
                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">1. Search</div>
                        <div class="command-main">Find Loan</div>
                        <div class="command-sub">Find loan, Find the [name] file</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 147 times</div>
                        <div class="status-badge ready">Ready</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" checked>
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>

                <!-- Document Generation Commands -->
                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">5. Documents</div>
                        <div class="command-main">Generate a Document</div>
                        <div class="command-sub">Pre-approval, Pre-qualification letters</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 0 times</div>
                        <div class="status-badge pending">Pending</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input">
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>

                <!-- Task Management Commands -->
                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">6. Task Management</div>
                        <div class="command-main">Manage Tasks</div>
                        <div class="command-sub">List, complete, remove, reject tasks</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 0 times</div>
                        <div class="status-badge pending">Pending</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input">
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>

                <!-- MI Quote Commands -->
                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">4. MI Quotes</div>
                        <div class="command-main">Run MI Quote</div>
                        <div class="command-sub">Radian, Essent, National MI, MGIC, Enact, Arch</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 76 times</div>
                        <div class="status-badge ready">Ready</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" checked>
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>

                <!-- Communication Commands -->
                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">9. Communication</div>
                        <div class="command-main">Communication</div>
                        <div class="command-sub">Call borrower, email links, send reminders</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 0 times</div>
                        <div class="status-badge pending">Pending</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input">
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function toggleDropdown(button) {
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
            
            // Toggle current dropdown
            const dropdown = button.nextElementSibling;
            dropdown.classList.toggle('show');
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.matches('.three-dots-btn')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        });

        // Handle checkbox selection for bulk actions
        document.addEventListener('change', function(event) {
            if (event.target.matches('.command-checkbox')) {
                const checkedBoxes = document.querySelectorAll('.command-checkbox:checked');
                const bulkActions = document.getElementById('bulkActions');
                
                if (checkedBoxes.length > 0) {
                    bulkActions.classList.add('visible');
                } else {
                    bulkActions.classList.remove('visible');
                }
            }
        });

        // Handle toggle switches
        document.addEventListener('change', function(event) {
            if (event.target.matches('.toggle-input')) {
                const commandItem = event.target.closest('.command-item');
                const commandName = commandItem.querySelector('.command-main').textContent;
                const isEnabled = event.target.checked;
                
                console.log(`Command "${commandName}" ${isEnabled ? 'enabled' : 'disabled'}`);
                // Here you would make an API call to update the command status
            }
        });
    </script>
</body>
</html>="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>

                <!-- Data Update Commands -->
                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">2. Data Updates</div>
                        <div class="command-main">Update Loan</div>
                        <div class="command-sub">Update loan amount, purchase price, rates</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 89 times</div>
                        <div class="status-badge ready">Ready</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" checked>
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>

                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">2. Data Updates</div>
                        <div class="command-main">Update Loan Amount</div>
                        <div class="command-sub">Loan Amount</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 34 times</div>
                        <div class="status-badge ready">Ready</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" checked>
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style="color: #e74c3c;">Delete</div>
                        </div>
                    </div>
                </div>

                <!-- Service Commands -->
                <div class="command-item">
                    <input type="checkbox" class="command-checkbox">
                    <div class="command-info">
                        <div class="command-category">3. Services</div>
                        <div class="command-main">Run a Service</div>
                        <div class="command-sub">Run credit, VOA, VOI, DU, LP services</div>
                    </div>
                    <div class="command-meta">
                        <div class="usage-stats">Used 203 times</div>
                        <div class="status-badge ready">Ready</div>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" class="toggle-input" checked>
                        <span class="toggle-slider"></span>
                    </label>
                    <div class="command-actions">
                        <button class="three-dots-btn" onclick="toggleDropdown(this)">⋮</button>
                        <div class="dropdown-menu">
                            <div class="dropdown-item">Edit Command</div>
                            <div class="dropdown-item">Test Command</div>
                            <div class="dropdown-item">View Usage</div>
                            <div class="dropdown-item">Duplicate</div>
                            <div class="dropdown-item" style
