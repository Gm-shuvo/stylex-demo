// dialog.stylex.ts
import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    width: '90%',
    maxWidth: 500,
    zIndex: 1001,
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
  },
  header: {
    marginBottom: 16,
  },
  footer: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    margin: 0,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});
