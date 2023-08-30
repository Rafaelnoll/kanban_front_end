import { useState, useCallback, useEffect, RefObject } from 'react';

interface useTaskActionsProps {
  onUpdate: () => void;
  onDelete: () => void;
  onSeeDetails: () => void;
  actionsMenuRef: RefObject<HTMLDivElement>;
}

export default function useTaskActions({
  onDelete,
  onSeeDetails,
  onUpdate,
  actionsMenuRef,
}: useTaskActionsProps) {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  const closeActionsMenu = useCallback(() => {
    setIsActionsOpen(false);
  }, []);

  function handleUpdate() {
    onUpdate();
    closeActionsMenu();
  }

  function handleDelete() {
    onDelete();
    closeActionsMenu();
  }

  function handleSeeDetails() {
    onSeeDetails();
    closeActionsMenu();
  }

  function handleChangeActionsIsOpen(value: boolean) {
    setIsActionsOpen(value);
  }

  useEffect(() => {
    const actionsMenu = actionsMenuRef.current;

    function handleClickOutside(event: MouseEvent) {
      if (!actionsMenu?.contains(event.target as Node)) {
        setIsActionsOpen(false);
      }
    }

    document?.addEventListener('mousedown', handleClickOutside);

    return () => document?.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return {
    isActionsOpen,
    handleUpdate,
    handleDelete,
    handleSeeDetails,
    handleChangeActionsIsOpen,
  };
}
