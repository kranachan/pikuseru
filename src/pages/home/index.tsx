import { Button } from 'components/button'
import VariableColorLogo from 'assets/icons/variable-color-logo.svg?component'
import styles from './index.module.css'
import { ButtonGroup } from 'components/button-group'
import { Fragment } from 'react'
import { PixelCanvas } from 'components/pixel-canvas'
import { useEventListener } from 'hooks/use-event-listener'
import { isMac, openLinkInNewTab } from 'utils'
import { ThemeDialog } from './theme-dialog'
import { CreateDialog } from './create-dialog'
import { FIGMA_LINK, GITHUB_LINK } from 'constants/external-link'
import { CanvasSize, CanvasMode } from 'constants/canvas'
import { canvasAtom } from 'atom/canvas'
import { useCycle } from 'framer-motion'
import { useImmerAtom } from 'jotai-immer'
import clsx from 'clsx'
import { Icon } from 'components/icon'
import { LucideIconKey } from 'constants/icon'

export const Home = () => {
  const [createDialogOpen, toggleCreateDialogOpen] = useCycle(false, true)
  const [themeDialogOpen, toggleThemeDialogOpen] = useCycle(false, true)
  const [canvasRootFocus, toggleCanvasRootFocus] = useCycle(false, true)
  const [canvasState, setCanvasState] = useImmerAtom(canvasAtom)
  const {
    isCreated,
    isFullScreen,
    size: canvasSize,
    mode: canvasMode,
  } = canvasState

  const keydownHandler = (e: KeyboardEvent) => {
    if (canvasRootFocus) {
      e.preventDefault()
      const isControlKeyPressed = isMac ? e.metaKey : e.ctrlKey
      if (isControlKeyPressed) {
        switch (e.key) {
          case 'z':
            // undo
            break
          case 'y':
            // redo
            break
        }
      }
    }
  }

  useEventListener('keydown', keydownHandler, [canvasRootFocus])

  const handleCreateDialogContinue = (size: CanvasSize) => {
    setCanvasState((canvas) => {
      canvas.isCreated = true
      canvas.isFullScreen = true
      canvas.size = size
    })
    toggleCreateDialogOpen()
  }

  const toggleCanvasMode = () => {
    setCanvasState((canvas) => {
      const isDrawMode = canvas.mode === CanvasMode.Draw
      canvas.mode = isDrawMode ? CanvasMode.Erase : CanvasMode.Draw
    })
  }

  const iconsForGuide: LucideIconKey[] = [
    'Heart',
    'Wand',
    'Gamepad',
    'Candy',
    'Cookie',
  ]

  const userGuide = (
    <div className={styles['guide']}>
      {iconsForGuide.map((iconName) => (
        <Icon name={iconName} size={48} />
      ))}
      <p>
        STEP 1 YOU SHOULD KNOW <br /> BECOME A SOLO-ROCKSTAR
      </p>
      <Button onClick={() => toggleCreateDialogOpen()}>
        <Icon name="PlusCircle" />
        NEW CREATION
      </Button>
      <Button>
        <Icon name="Image" />
        ADD IMAGE
      </Button>
      <span>OR DRAG TO HERE</span>
    </div>
  )

  return (
    <Fragment>
      <CreateDialog
        open={createDialogOpen}
        onClose={toggleCreateDialogOpen}
        onContinue={handleCreateDialogContinue}
      />
      <ThemeDialog
        open={themeDialogOpen}
        onClose={() => toggleThemeDialogOpen()}
      />
      <div className={styles.layout}>
        <div className={styles.header}>
          <Button className={styles.menu}>
            <Icon name="AlignJustify" size={32} />
          </Button>
          <VariableColorLogo className={styles.logo} width={62} height={62} />
          <b className={styles['app-name']}>PIKUSERU</b>
          <section className={styles.options}>
            <Button onClick={() => toggleThemeDialogOpen()}>
              <Icon name="Palette" size={28} />
            </Button>
            <Button onClick={() => openLinkInNewTab(FIGMA_LINK)}>
              <Icon name="Figma" size={28} />
            </Button>
            <Button onClick={() => openLinkInNewTab(GITHUB_LINK)}>
              <Icon name="Github" size={28} />
            </Button>
            <Button>
              <Icon name="Languages" size={28} />
              <b>ENGLISH</b>
            </Button>
          </section>
        </div>

        <div
          tabIndex={0}
          className={clsx(
            styles['canvas-root'],
            isFullScreen && styles['is-fullscreen'],
          )}
          onFocus={() => toggleCanvasRootFocus()}
          onBlur={() => toggleCanvasRootFocus()}
        >
          {!isCreated ? (
            userGuide
          ) : (
            <div className={styles['canvas-overflow-handler']}>
              <div className={styles['canvas-wrapper']}>
                <PixelCanvas col={canvasSize.width} row={canvasSize.height} />
              </div>
            </div>
          )}
        </div>
        <div className={styles['modify-bar']}>
          <ButtonGroup groupName="RECORD">
            <Button>
              <Icon name="Undo2" size={28} />
            </Button>
            <Button>
              <Icon name="Redo2" size={28} />
            </Button>
            <Button>
              <Icon name="RefreshCw" size={28} />
            </Button>
          </ButtonGroup>

          <ButtonGroup groupName="DRAWING">
            <Button
              onClick={toggleCanvasMode}
              selected={canvasMode === CanvasMode.Draw}
            >
              <Icon name="Brush" size={28} />
            </Button>
            <Button
              onClick={toggleCanvasMode}
              selected={canvasMode === CanvasMode.Erase}
            >
              <Icon name="Eraser" size={28} />
            </Button>
            <Button>
              <Icon name="Sliders" size={28} />
            </Button>
          </ButtonGroup>

          <ButtonGroup groupName="PRESENT">
            <Button>
              <Icon name="Aperture" size={28} />
              <b>NONE</b>
            </Button>
          </ButtonGroup>

          <section className={styles['modify-output']}>
            <ButtonGroup groupName="SHARE TO">
              <Button>
                <Icon name="Twitter" size={28} />
              </Button>
              <Button>
                <Icon name="Facebook" size={28} />
              </Button>
              <Button>
                <Icon name="Instagram" size={28} />
              </Button>
            </ButtonGroup>

            <Button>
              <Icon name="FileDown" size={28} />
              <b>EXPORT</b>
            </Button>
          </section>
        </div>
      </div>
    </Fragment>
  )
}
