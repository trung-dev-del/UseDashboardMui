"use client"
import * as React from 'react';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Stack, Tooltip, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'inline', md: 'none' },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
      />
      <ThemeSwitcher />
    </Stack>
  );
}

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <DashboardLayout
    slots={{
      toolbarActions: () => <ToolbarActionsSearch />, // Sử dụng callback để render component
    }}
    >
      <PageContainer>{props.children}</PageContainer>
    </DashboardLayout>
  );
}  
